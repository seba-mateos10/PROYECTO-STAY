import { useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [quantity, setQuantity] = useState(initial);

  const sumar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Stock Maximo",
        text: "No hay mas unidades en stock",
      });
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
