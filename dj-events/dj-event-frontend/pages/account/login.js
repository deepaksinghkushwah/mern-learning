import Layout from "@/components/Layout";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "@/styles/AuthForm.module.css";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error} = useContext(AuthContext);
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
    login({email, password});
  };
  return (
    <Layout title="Login" keywords="Login Page">
      <div className={styles.auth}>
        <h1>
          <FaUser /> Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Login" className="btn" />
          <p>
            Don't have an account,{" "}
            <Link href="/account/register">Register</Link> here
          </p>
        </form>
      </div>
    </Layout>
  );
}
