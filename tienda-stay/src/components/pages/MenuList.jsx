const MenuList = (props) => {
  return (
    <div>
      <ul>
        <li>{props.itemUno}</li>
        <li>{props.itemDos}</li>
        <li>{props.itemTres}</li>
        <li>{props.itemCuatro}</li>
      </ul>
    </div>
  );
};

export default MenuList;
