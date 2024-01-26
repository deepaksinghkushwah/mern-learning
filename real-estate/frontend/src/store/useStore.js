import create from "zustand";
import createBaseSlice from "./createBaseSlice";
import {persist} from "zustand/middleware";
import createPropertySlice from "./createPropertySlice";
import createUserSlice from "./createUserSlice";
export const useBaseStore = create((set, get) => ({
    ...createBaseSlice(set, get)
}));

export const usePropertyStore = create((set,get) => ({
    ...createPropertySlice(set, get)
}));

export const useUserStore = create(persist((set, get) => ({
    ...createUserSlice(set, get)
})),{name: 'userStore',getStorage:() => sessionStorage});