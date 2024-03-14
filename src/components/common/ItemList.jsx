// import { AgregarDocs } from "../../AgregarDocs";
import { ProductCard } from "./productCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <>
      {/* <AgregarDocs /> */}

      <div className="cardContainer">
        {items.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};
