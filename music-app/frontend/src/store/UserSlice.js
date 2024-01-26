import axiosHttp from "./axiosHttp";

export const UserSlice = (set) => ({
  name: 'User',
  user: null,
  token: null,
  setUser: async(user) => {
    set({user: user});
  },

  getUser: async(id) => {
    const json = await axiosHttp.get(`/user/${id}`);
    return await json.data;
  },
  signIn: async (email, password) => {
    try {
      //await timeout(2000);
      const json = await axiosHttp.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/auth/signin`, { email, password });
      const data = await json.data;
      //console.log(data.user);
      set(() => ({
        user: data.user,
        token: data.token,
      }));
      return true;
    } catch (error) {
      return null;
    }
  },
  signUp: async (form) => {
    try {
      const json = await axiosHttp.post("/register", form);
      const data = await json.data;
      set(() => ({
        user: data.user,
        token: data.accessToken,
      }));
      return {token: data.accessToken, error: null, message: 'User registered'}
    } catch (error) {      
      const errMsg = await error.response;
      console.log(errMsg.data);
      return {message: errMsg.data, error: true, token: null};
    }
  },
  signOut: () => {
    set({
      user: null,
      token: null,
    });
  },

});