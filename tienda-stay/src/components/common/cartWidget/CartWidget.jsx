import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="containerLength">
      <span className="cantCart">10</span>
      <FaShoppingCart color="#5b00fb" />
    </div>
  );
};

export default CartWidget;
