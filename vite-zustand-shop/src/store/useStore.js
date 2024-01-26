import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import createProductSlice from "./createProductSlice";
import createUserSlice from "./createUserSlice";
import createBaseSlice from "./createBaseSlice";


export const useBaseStore = create((set, get) => ({
    ...createBaseSlice(set, get)
}));

export const useUserStore = create(((set, get) => ({
    ...createUserSlice(set, get)
})),{name: 'user-store'});

export const useProductStore = create(((set, get) => ({
    ...createProductSlice(set, get)
})),{name: 'product-store'});