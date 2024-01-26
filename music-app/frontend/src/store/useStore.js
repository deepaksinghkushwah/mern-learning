import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware"
import { BaseSlice } from "./BaseSlice";
import { UserSlice } from "./UserSlice";
import { SongSlice } from "./SongSlice";
export const useBaseStore = create((set, get) => ({
  ...BaseSlice(set, get)
}));

export const useSongStore = create(((set, get) => ({
  ...SongSlice(set, get)
})),{name: 'songStore',getStorage:() => sessionStorage});

export const useUserStore = create(
  persist((set, get) => ({
    ...UserSlice(set, get)
}),{name: 'userStore',storage: createJSONStorage(() => sessionStorage)}
));