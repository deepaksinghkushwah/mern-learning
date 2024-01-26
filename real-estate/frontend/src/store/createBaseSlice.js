const createBaseSlice = (set, get) => ({
    name: 'BaseSlice',
    loading: false,
    setLoading: (stat) => {        
        set((state) => ({
            ...state,
            loading: stat,
        }))
    }
})

export default createBaseSlice;