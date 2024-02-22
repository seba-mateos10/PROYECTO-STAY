import "./Counter.css";
import { useState } from "react";

export const Counter = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const sumar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const restar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={restar}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={sumar}>
          +
        </button>
      </div>
      <div className="ButtonCartContainer">
        <button
          className="ButtonCart"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
