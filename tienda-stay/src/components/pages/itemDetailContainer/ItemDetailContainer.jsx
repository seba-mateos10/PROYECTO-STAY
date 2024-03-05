import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../productsMock";
import { CartContext } from "../../../context/CartContext";
import { CardSkeletonDetail } from "../../common/CardSkeletonDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  // console.log(id);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, totalQuantity } = useContext(CartContext);
  const initial = totalQuantity(id);

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

  if (isLoading) {
    return (
      <div style={{ display: "flex" }}>
        <CardSkeletonDetail />
      </div>
    );
  }

  return (
    <>
      <ItemDetail {...item} onAdd={onAdd} initial={initial} />
    </>
  );
};
