import Layout from "@/components/Layout";
import React, { useEffect, useState,useContext } from "react";
import { toast } from "react-toastify";
import styles from "@/styles/AuthForm.module.css";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const {register, error} = useContext(AuthContext);
  useEffect(() => {
    if(error){
      toast.error(error);
    }
  },[error]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      toast.error("Email can not be empty");
      return false;
    }

    if (password.trim() === "") {
      toast.error("Password can not be empty");
      return false;
    }

    if (firstname.trim() === "") {
      toast.error("First name can not be empty");
      return false;
    }

    if (lastname.trim() === "") {
      toast.error("Last name can not be empty");
      return false;
    }
    register({email, password, firstname, lastname});
  };
  return (
    <Layout title="Register" keywords="Register Page">
      <div className={styles.auth}>
        <h1>
          <FaUser /> User Registeration
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="">
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <input type="submit" value="Register" className="btn" />
          <p>
            Already have an account, <Link href="/account/login">Login</Link>{" "}
            here
          </p>
        </form>
      </div>
    </Layout>
  );
}
