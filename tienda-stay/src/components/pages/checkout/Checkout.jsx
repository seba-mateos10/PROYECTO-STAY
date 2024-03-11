import { Button } from "@mui/material";
import "./Checkout.css";
import { Link } from "react-router-dom";

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div>
      {orderId ? (
        <div className="completedPurchase">
          <h1 className="codeTracking">
            Gracias... Tu numero de compra es {orderId}
          </h1>
          <Link className="linkHome" to="/">
            Seguir comprando
          </Link>
        </div>
      ) : (
        <form className="form" onSubmit={envioDeFormulario}>
          <input
            className="checkoutData"
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
          />

          <input
            className="checkoutData"
            type="text"
            placeholder="Ingresa tu apellido"
            onChange={capturar}
            name="lastName"
          />

          <input
            className="checkoutData"
            type="text"
            placeholder="Ingresa tu email"
            onChange={capturar}
            name="email"
          />

          <input
            className="checkoutData"
            type="text"
            placeholder="Ingresa tu telefono"
            onChange={capturar}
            name="phone"
          />

          <input
            className="checkoutData"
            type="text"
            placeholder="Ingresa tu provincia"
            onChange={capturar}
            name="province"
          />

          <input
            className="checkoutData"
            type="text"
            placeholder="Ingresa tu direccion"
            onChange={capturar}
            name="direction"
          />

          <input
            className="checkoutData"
            type="text"
            placeholder="Ingresa tu codigo postal"
            onChange={capturar}
            name="postalCode"
          />

          <Button type="submit" variant="contained">
            Comprar
          </Button>
        </form>
      )}
    </div>
  );
};
