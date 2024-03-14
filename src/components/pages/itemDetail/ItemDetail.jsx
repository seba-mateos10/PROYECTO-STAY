import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

export const ItemDetail = ({
  title,
  description,
  img,
  price,
  stock,
  onAdd,
  initial,
}) => {
  return (
    <div className="">
      <div className="detailCard">
        <img className="detailImg" src={img} alt="" />
        <div className="detailInfo">
          <h5 className="detailTitle">{title}</h5>
          <p className="detailPrice">Precio: {price} </p>
          <p className="detailDescription"> {description} </p>
          {initial ? (
            <h3>Ya has agregado {initial} unidades en el carrito </h3>
          ) : (
            <h3>No tienes unidades agregadas</h3>
          )}

          <CounterContainer stock={stock} onAdd={onAdd} initial={initial} />
        </div>
      </div>
    </div>
  );
};
