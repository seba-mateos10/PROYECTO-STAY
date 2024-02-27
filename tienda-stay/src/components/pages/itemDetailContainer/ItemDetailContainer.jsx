import { useEffect, useState } from "react";
import { ItemDetail } from "../../common/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../productsMock";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  // console.log(id);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    console.log(infoProducto);
    // Quiero navegar al carrito
    // navigate("/cart")
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
