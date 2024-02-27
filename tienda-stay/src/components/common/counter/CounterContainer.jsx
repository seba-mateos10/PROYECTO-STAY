import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const sumar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      alert("stock maximo");
    }
  };

  const restar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("no puede ser menos de 1");
    }
  };

  return (
    <Counter quantity={quantity} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default CounterContainer;
