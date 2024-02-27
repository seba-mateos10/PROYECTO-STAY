import { Button } from "@mui/material";
import "./Counter.css";

const Counter = ({ quantity, sumar, restar, onAdd, stock }) => {
  return (
    <div className="Counter">
      <div className="Controls">
        <Button onClick={restar} disabled={quantity === 1 ? true : false}>
          -
        </Button>
        <h4 className="Number">{quantity}</h4>
        <Button onClick={sumar}>+</Button>
      </div>

      <div className="ButtonCartContainer">
        <Button onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default Counter;
