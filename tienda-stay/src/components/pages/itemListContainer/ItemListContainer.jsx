import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "../itemListContainer/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      reject("error");
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="containerSaludo">{greeting}</h1>

      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
