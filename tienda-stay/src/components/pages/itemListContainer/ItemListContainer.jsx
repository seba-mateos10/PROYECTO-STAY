import { useState, useEffect } from "react";
// import { getProducts } from "../../../productsMock";
import { ItemList } from "../../common/ItemList";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { database } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    // getProducts().then((resp) => {
    //   if (category) {
    //     const productsFilter = resp.filter(
    //       (product) => product.category === category
    //     );
    //     setItems(productsFilter);
    //   } else {
    //     setItems(resp);
    //   }

    //   setIsLoading(false);
    // });

    let productsCollection = collection(database, "products");

    let consultation = productsCollection;

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );

      consultation = productsCollectionFiltered;
    }

    getDocs(consultation)
      .then((res) => {
        let arrayDesencriptado = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setItems(arrayDesencriptado);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "15%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <ItemList items={items} />
    </>
  );
};
