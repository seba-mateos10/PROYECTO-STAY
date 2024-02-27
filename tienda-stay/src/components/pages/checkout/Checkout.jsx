import { Button } from "@mui/material";
import "./Checkout.css";

export const Checkout = ({ envioDeFormulario, capturar }) => {
  return (
    <div>
      <h1>Checkout</h1>

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
          placeholder="Titular Tarjeta..."
          onChange={capturar}
          name="nameOnCard"
        />

        <input
          className="checkoutData"
          type="text"
          placeholder="Numero..."
          onChange={capturar}
          name="numberCard"
        />

        <input
          className="checkoutData"
          type="text"
          placeholder="Vencimiento"
          onChange={capturar}
          name="expiryDate"
        />

        <input
          className="checkoutData"
          type="text"
          placeholder="CVV"
          onChange={capturar}
          name="codeSecurity"
        />

        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};
