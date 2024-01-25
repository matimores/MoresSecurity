import { Link } from "react-router-dom";
import ItemCount from "./itemCount";
import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({ product }) => {
  const [clickCount, setClickCount] = useState();
  const { addItem } = useContext(CartContext);

  const onAdd = (valor) => {
    setClickCount(valor);
    if (valor !== 0) {
      addItem(product, valor);
    }
  };

  return (
    <main style={{height:'70vh'}}>
      <div className="detail">
        <Link to={`/item/${product.id}`}></Link>
        <div className="contentImg">
          <img className="imgDetail" src={product.image} />
        </div>
        <div className="contentInfo">
          <h2 className="infoDetail">{product.title}</h2>
          <p className="descriptionDetail">{product.description}</p>

          <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
      </div>
    </main>
  );
};
export default ItemDetail;
