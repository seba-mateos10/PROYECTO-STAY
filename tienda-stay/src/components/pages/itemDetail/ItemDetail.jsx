import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

export const ItemDetail = ({
  title,
  description,
  img,
  price,
  stock,
  onAdd,
}) => {
  return (
    <div className="">
      <div className="detailCard">
        <img className="detailImg" src={img} alt="" />
        <div className="detailInfo">
          <h5 className="detailTitle">{title}</h5>
          <p className="detailPrice">Precio: {price} </p>
          <p className="detailDescription"> {description} </p>
          <CounterContainer stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
