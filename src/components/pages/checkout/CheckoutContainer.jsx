import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { ref } from "yup";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    province: "",
    direction: "",
    postalCode: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice, clearCart } = useContext(CartContext);
  let totalPay = totalPrice();

  const envioDeFormulario = (event) => {
    event.preventDefault();

    // ACA SE VALIDA TODO
    // Aca manipulo lo que quiera hacer con los datos del formulario

    let order = {
      buyer: userInfo,
      items: cart,
      total: totalPay,
    };

    let ordersCollection = collection(database, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((product) => {
      let refDoc = doc(database, "products", product.id);

      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });

    clearCart();
  };

  const capturar = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <Checkout
      orderId={orderId}
      envioDeFormulario={envioDeFormulario}
      capturar={capturar}
    />
  );
};
