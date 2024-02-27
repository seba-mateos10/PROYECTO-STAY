import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div>
      <h2>Carrito...</h2>
      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};
