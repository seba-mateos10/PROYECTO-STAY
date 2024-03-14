import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    let exists = isInCart(product.id);

    if (exists) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
      <Link></Link>;
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const isInCart = (id) => {
    let exists = cart.some((elemento) => elemento.id === id);
    return exists;
  };

  const removeProduct = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const totalProducts = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity;
    }, 0);

    return total;
  };

  const totalPrice = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity * elemento.price;
    }, 0);

    return total;
  };

  const totalQuantity = (id) => {
    let product = cart.find((elemento) => elemento.id === id);

    if (product) {
      return product.quantity;
    } else {
      return product;
    }
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeProduct,
    totalProducts,
    totalPrice,
    totalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
