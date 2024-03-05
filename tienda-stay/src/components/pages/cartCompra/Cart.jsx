import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, clearCart, removeProduct, totalPrice } =
    useContext(CartContext);
  let total = totalPrice();

  const alertClearCart = () => {
    Swal.fire({
      title: "Seguro que quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se ha limpiado el carrito!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Se ha salvado el carrito", "", "info");
      }
    });
  };

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

      <h2>El total a pagar es: {total} </h2>

      <button className="buttonClearCart" onClick={alertClearCart}>
        Limpiar carrito
      </button>

      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};
