import axiosHttp from "./axiosHTTP";
/*import {timeout} from "../utils/DateFunc";*/
const createUserSlice = (set, get) => ({
  name: "User",
  user: null,
  token: null,
  setUser: async (user) => {
    set({ user: user });
  },
  getUser: async (id) => {
    const json = await axiosHttp.get(`/users/${id}`);
    return await json.data;
  },
  signIn: async (email, password) => {
    try {
      //await timeout(2000);
      const json = await axiosHttp.post("/login", { email, password });
      const data = await json.data;
      set((state) => ({
        user: data.user,
        token: data.accessToken,
      }));
      return data.token;
    } catch (error) {
      return null;
    }
  },
  signUp: async (form) => {
    try {
      const json = await axiosHttp.post("/register", form);
      const data = await json.data;
      set((state) => ({
        user: data.user,
        token: data.accessToken,
      }));
      return data.accessToken;
    } catch (error) {
      return null;
    }
  },
  signOut: () => {
    set({
      user: null,
      token: null,
    });
  },
});

export default createUserSlice;
