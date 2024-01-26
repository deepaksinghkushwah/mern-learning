export const BaseSlice = (set) => ({
  name: 'Base Slice',
  loading: false,
  setLoading: (stat) => {
    set((state) => ({
      ...stat,
      loading: state
    }))
  }
});