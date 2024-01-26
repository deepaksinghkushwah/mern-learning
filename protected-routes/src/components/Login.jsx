import axios from '../api/axios';
import useAuth from "../hooks/useAuth";
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const { setAuth } = useAuth();
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(state);
        const login = async () => {
            try {
                const d = await axios.post("/login", state);
                const data = await d.data;
                const user = data.user;
                const accessToken = data.accessToken;   
                //console.log(data);
                toast.success("You are logged in");
                setAuth({ user, accessToken });
                setState({ email: '', password: '' });
                navigate(from, { replace: true });

            } catch (error) {
                toast.error("Error at login, invalid crendential");
            }

        }
        login();
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <table className='table table-bordered mx-auto w-50 text-center'>
                <thead>
                    <tr>
                        <th>Login Here...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="email" autoComplete="off" onChange={(e) => handleChange(e)} className='form-control' placeholder='Email' name="email" id="email" /></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="password" className='form-control' onChange={(e) => handleChange(e)} placeholder='Password' name="password" id="password" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className='btn btn-primary'>Login</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default Login