import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);

  let total = totalProducts();

  return (
    <Link to="/cart" className="containerLength">
      <span className="cantCart">{total}</span>
      <FaShoppingCart color="#000000" />
    </Link>
  );
};
