const createBaseSlice = (set, get) => ({
  name: "Base Slice",
  loading: false,
  setLoading: (stat) => {    
    set((state) => ({
      ...state,
      loading: stat,
    }));
  },
});

export default createBaseSlice;
