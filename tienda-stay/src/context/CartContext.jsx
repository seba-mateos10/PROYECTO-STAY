import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let exists = isInCart(product.id);

    if (exists) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let exists = cart.some((elemento) => elemento.id === id);
    return exists;
  };

  const removeProduct = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  let data = { cart, addToCart, clearCart, removeProduct };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
