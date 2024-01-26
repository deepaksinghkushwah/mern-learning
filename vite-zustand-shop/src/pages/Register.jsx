import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useBaseStore, useUserStore } from "../store/useStore";
const Register = () => {
  const signUp = useUserStore((state) => state.signUp);
  const setLoading = useBaseStore((state) => state.setLoading);

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    role: 'Registered'
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

    if (form.firstname === "") {
      toast.error("First name can not be empty");
      return false;
    }

    if (form.lastname === "") {
      toast.error("Last name can not be empty");
      return false;
    }
    const submitForm = async () => {
      let {token, error, message} = await signUp(form);
      setLoading(false);
      if (token !== null) {        
        toast.success(message);
        navigate("/");
      } else {
        console.log(message);
        toast.error(message);
      }
    }

    submitForm();



  }
  return (
    <>

      <h2>Signup</h2>
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
              <td>
                <input placeholder='First Name' type="text" name="firstname" id="firstname" value={form.firstname} onChange={(e) => handleChange(e)} />
              </td>
            </tr>

            <tr>
              <td>
                <input placeholder='Last Name' type="text" name="lastname" id="lastname" value={form.lastname} onChange={(e) => handleChange(e)} />
              </td>
            </tr>

            <tr>
              <td><button type="submit" className='btn'>Signup</button></td>
            </tr>
          </tbody>
        </table>
      </form>
      </div>
    </>
  )
}

export default Register;