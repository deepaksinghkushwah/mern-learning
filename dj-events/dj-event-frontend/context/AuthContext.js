import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL, NEXT_URL } from "../config/index";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    checkUserLoggedIn();
  }, [])
  
  // register call
  const register = async ({email, password, firstname, lastname}) => {    
    const res = await fetch(`${NEXT_URL}/auth/register`,{
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password, firstname, lastname})
    });
    const data  = await res.json();
    if(res.ok){
      toast.success("You are registered and logged in");
      setUser(data.user);
      router.push("/account/dashboard");
    } else {
      setError(data.message);
    }
  };
  
  // login call
  const login = async (postData) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {        
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await res.json();
    if(res.ok){
        setUser(data.user);
        router.push("/account/dashboard");
    } else {
        setError(data.message);
    }
    
  };

  // logout call
  const logout = async () => {
    console.log("Logout");
    const res = fetch(`${NEXT_URL}/api/logout`,{
      method: 'POST'
    });
    if(res.ok) {
      setUser(null);      
      router.push("/");      
    }    
  };
  
  // check if user loggedin
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();
    if(res.ok){
        setUser(data.user);
    } else {
        setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
