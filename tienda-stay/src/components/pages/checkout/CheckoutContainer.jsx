import { useState } from "react";
import { Checkout } from "./Checkout";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    province: "",
    direction: "",
    postalCode: "",
    nameOnCard: "",
    numberCard: "",
    expiryDate: "",
    codeSecurity: "",
  });

  const envioDeFormulario = (event) => {
    event.preventDefault();

    // ACA SE VALIDA TODO
    // Aca manipulo lo que quiera hacer con los datos del formulario
    console.log("se envio el formulario");
    console.log(userInfo);
  };

  const capturar = (event) => {
    console.log(event);
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return <Checkout envioDeFormulario={envioDeFormulario} capturar={capturar} />;
};
