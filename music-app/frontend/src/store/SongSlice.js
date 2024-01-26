import axiosHttp from "./axiosHttp";

export const SongSlice = (set) => ({
  songs: [],
  getSongs: async() => {
    const json = await axiosHttp.get(`/api/v1/song/getSongs`);
    const songs = await json.data;
    set(() => ({
      songs: songs
    }));
    return songs;  
  },

  getSong: async(id) => {
    const json = await axiosHttp.get(`/api/v1/song/getSong/${id}`);
    return await json.data;
  },
  

});