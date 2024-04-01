import {
  createContext,
  useState,
  useReducer,
  useContext,
  useEffect,
} from "react";
import { initialState } from "./reducer/initState";
import { cartReducer } from "./reducer/cartReducer";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    console.log("added", product);
  };

  // Save cart state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) });
    }
  }, []);

  // const addToCart = (product) => {
  //   // Create a copy of the current cart items array
  //   const currentCartItem = [...cartItem];

  //   // Check if the product already exists in the cart
  //   const existingCartItem = currentCartItem.find(
  //     (item) => item.id === product.id
  //   );

  //   if (existingCartItem) {
  //     // If the product exists, update the quantity
  //     existingCartItem.quantity += 1;
  //   } else {
  //     // If the product doesn't exist, add it to the cart with quantity 1
  //     currentCartItem.push({
  //       product,
  //       quantity: 1,
  //     });
  //   }
  //   setCartItem(currentCartItem);
  //   console.log(currentCartItem);
  // };

  // const addToCart = (product) => {
  //   const isItemInCart = cartItems.find(
  //     (cartItem) => cartItem.product.id === product.id
  //   ); // check if the item is already in the cart

  //   if (isItemInCart) {
  //     existingCartItem.quantity += 1;
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
  //   }
  //   console.log(cartItems);
  // };
  return (
    <Context.Provider
      value={{
        setShowNav,
        showNav,
        toggleNav,
        state,
        addToCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCart = () => useContext(Context);
