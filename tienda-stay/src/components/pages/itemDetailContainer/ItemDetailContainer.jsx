import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../productsMock";
import { CartContext } from "../../../context/CartContext";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  // console.log(id);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
  };

  return (
    <>
      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        <ItemDetail {...item} onAdd={onAdd} />
      )}
    </>
  );
};
