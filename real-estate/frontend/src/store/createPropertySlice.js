import axiosHTTP from "./axiosHTTP";
import { PER_PAGE_LIMIT } from "../config/index.js";
import axios from "axios";
import { useUserStore } from "./useStore";
const createPropertySlice = (set, get) => ({
    name: "PropertySlice",
    properties: [],
    property: null,
    total: 0,
    pagination: {},
    searchTerm: '',    
    getAllProperties: async (page) => {
        let url = `/properties?page=${page}&limit=${PER_PAGE_LIMIT}`;
        if(get().searchTerm!==""){
            url += `&term=${get().searchTerm}`;
        }        
        const res = await axiosHTTP.get(url);
        const data = res.data;
        //console.log(data.pagination);
        set({ properties: data.data, pagination: data.pagination, total: data.pagination.totalRows });
    },
    setSearchTerm: async(term) => {
        set({searchTerm: term});
    },
    resetSearch: () => {
        set({searchTerm: ""});
        get().getAllProperties(1);        
    },
    getPropertyFromSlug: async(slug) => {
        let url = `/properties/${slug}`;
        const res = await axiosHTTP.get(url);
        const data = await res.data;
        //console.log(data.item);
        set({property: data.item});
        return data.item;
        
    },
    createProperty: async(item) => {
        const token = useUserStore.getState().token;
        let url = `/properties`;
        try {
            const res = await axiosHTTP.post(url, item,{
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            const data = await res.data;
            return data.property;       
        } catch(error){
            console.log(error);
            alert(error.message);
        }
         
    },
    updateProperty: async(slug, item) => {        
        const token = useUserStore.getState().token;
        let url = `/properties/${slug}`;
        const res = await axiosHTTP.patch(url, item,{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await res.data;        
        return data.property;
    }
    
});

export default createPropertySlice;