import { ProductCard } from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div className="cardContainer">
      {items.map(({ id, img, title, description, price, category }) => {
        return (
          <ProductCard
            key={id}
            img={img}
            title={title}
            description={description}
            price={price}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
