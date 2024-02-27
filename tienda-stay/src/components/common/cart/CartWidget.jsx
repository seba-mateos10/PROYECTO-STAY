import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to="/cart" className="containerLength">
      <span className="cantCart">10</span>
      <FaShoppingCart color="#000000" />
    </Link>
  );
};
