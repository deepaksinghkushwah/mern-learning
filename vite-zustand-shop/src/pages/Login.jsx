import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {useUserStore, useBaseStore} from "../store/useStore";

const Login = () => {
  const signIn = useUserStore((state) => state.signIn);    
  const setLoading  = useBaseStore(state => state.setLoading);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });



  const handleChange = (e) => {
    setForm((prevStat) => ({
      ...prevStat,
      [e.target.id]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();    
    
    if (form.email === "") {
      toast.error("Email can not be empty");
      return false;
    }

    if (form.password === "") {
      toast.error("Password can not be empty");
      return false;
    }
    
    const call = async() => {
      let token = await signIn(form.email, form.password);    
      setLoading(false);
      if (token !== null) {
        toast.success("Logged in successfully");
        navigate("/");
      } else {
        toast.error("Invalid email or password");
      }
    };

    call();
    
    
    
    

  }
  return (
    <>     
      <h2>Login</h2>
      <div className="main-content">
      <form onSubmit={(e) => handleSubmit(e)}>
        <table className='customTable'>
          <tbody>
            <tr>
              <td>
                <input placeholder='Email' type="email" name="email" id="email" value={form.email} onChange={(e) => handleChange(e)} />
              </td>
            </tr>
            <tr>
              <td>
                <input placeholder='Password' type="password" name="password" id="password" value={form.password} onChange={(e) => handleChange(e)} />
              </td>
            </tr>
            <tr>
              <td><button type="submit" className='btn'>Login</button></td>
            </tr>
          </tbody>
        </table>
      </form>
      </div>
    </>
  )
}

export default Login