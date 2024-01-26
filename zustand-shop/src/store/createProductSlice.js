import { toast } from "react-toastify";
import axiosHttp from "./axiosHTTP";

const createProductSlice = (set, get) => ({
  name: "Product Section",
  products: [],
  cart: [],
  getProducts: async () => {
    await setTimeout(2000);
    const json = await axiosHttp.get("/products");
    const data = await json.data;
    set({ products: data});
  },
  addToCart: (product) => {
    
    let index = get().cart.findIndex((item) => {
      return item.id === product.id;
    });

    // item found in cart
    if (index >= 0) {
      let cartItems = [...get().cart];
      let item = { ...cartItems[index] };
      item.qty = item.qty + 1;
      cartItems[index] = item;
      set((state) => ({
        cart: [...cartItems],
      }));
      
      toast.success("Product quantity added to cart")  
    } else {
      // item not foundin cart so add
      product.qty = 1;
      set((state) => ({
        cart: [...state.cart, product],
      }));      
      toast.success("Product added to cart")
    }
    
  },

  getCartTotal: () => {
    const values = Object.values(get().cart);
    const sum = values.reduce((accumulator, item) => {
      return accumulator + item.qty * item.price;
    }, 0);
    return sum;
  },

  deleteFromCart: (itemID) => {
    let items = [...get().cart];
    items = items.filter(item => item.id !== itemID);
    set((state) => ({
      cart: [...items]
    }));
  },
  emptyCart: () => {
    set(state => ({
      cart: []
    }));
  }
});

export default createProductSlice;
