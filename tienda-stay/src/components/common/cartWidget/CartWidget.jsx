import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="containerLength">
      <span className="cantCart">10</span>
      <FaShoppingCart color="#000000" />
    </div>
  );
};

export default CartWidget;
