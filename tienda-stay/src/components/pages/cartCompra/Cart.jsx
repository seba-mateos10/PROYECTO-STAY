import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import { Button } from "@mui/material";

export const Cart = () => {
  const { cart, clearCart, removeProduct } = useContext(CartContext);

  return (
    <div className="cartContainer">
      {cart.map((product) => (
        <div className="cartCard" key={product.id}>
          <img className="cartImg" src={product.img} alt="" />
          <h2 className="cartTitle">{product.title}</h2>
          <h2 className="cartQuantity">Cantidad: {product.quantity} </h2>
          <h2 className="cartPrice">Precio por unidad: {product.price} </h2>
          <button
            className="buttonClearProduct"
            onClick={() => removeProduct(product.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <button className="buttonClearCart" onClick={clearCart}>
        Limpiar carrito
      </button>

      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};
