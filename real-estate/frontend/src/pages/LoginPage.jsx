import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/useStore'
import { toast } from "react-toastify";
const LoginPage = () => {
    const navigate = useNavigate();
    const login = useUserStore(state => state.login);
    const [form, setForm] = useState({
        email: '', password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(form.email, form.password);
        if (result) {
            toast.success("You are logged in successfully");
            navigate("/members/dashboard");
        } else {
            toast.error("Invalid email or password");
        }

    }

    const handleChange = (e) => {
        setForm((prev) => ({
            ...form,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className='container col-4 border mt-3 border-2 rounded'>
            <h1 className='mb-3'>Login Here...</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td><input className='form-control' placeholder='Email' type="email" name="email" value={form.email} onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <td><input className='form-control' placeholder='Password' type="password" name="password" value={form.password} onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <td>
                                <button className='btn btn-primary btn-sm'>Login</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </form>
        </div>
    )
}

export default LoginPage