import { ProductCard } from "./productCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <>
      <div className="cardContainer">
        {items.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};
