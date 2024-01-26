import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { persist } from "zustand/middleware";
import axiosHTTP from "./axiosHTTP";

const createUserSlice = (set, get) => ({
    name:  "UserSlice",
    user: null,
    token: null,
    login: async(email, password) => {
        try {
            const res = await axiosHTTP.post(`/auth/login`,{email, password},{
                headers: { 'Content-Type' : 'application/json'}
            });
            const data = await res.data;
            if(data.user._id){
                set({user: data.user, token: data.token});
                return true;
            } else {
                return false;
            }
        } catch(error){
            return false;
        }
        
        
        
        
    },
    logout: async() => {                
        set({user: null, token: null});
        //toast.error("Invalid email or password");
        return true;        
    }
});

export default createUserSlice;