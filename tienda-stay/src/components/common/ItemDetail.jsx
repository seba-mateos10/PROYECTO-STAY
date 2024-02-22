import { Counter } from "./counter/Counter";

export const ItemDetail = ({ title, description, img, price, stock }) => {
  return (
    <div className="">
      <div className="detailCard">
        <img className="detailImg" src={img} alt="" />
        <div className="detailInfo">
          <h5 className="detailTitle">{title}</h5>
          <p className="detailPrice">Precio: {price} </p>
          <p className="detailDescription"> {description} </p>
          <Counter
            initial={1}
            stock={stock}
            onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
          />
        </div>
      </div>
    </div>
  );
};
