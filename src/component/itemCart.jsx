import React from "react";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";

const ItemCart = ({ product }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="itemCart">
      <img className="imgItemCart" src={product.image} />
      <p style={{fontSize:'30px'}} className="titleItemCart">{product.title}</p>
      <p style={{ color: "red" , fontSize:'20px' }} className="infoCart">
        UNIDADES: {product.quantity}
      </p>
      <p style={{fontSize:'20px'}} className="unidadItemCart">Precio unidad: $ {product.price}</p>
      <p style={{fontSize:'20px'}} className="totalItemCart">
        Subtotal: $ {product.quantity * product.price}
      </p>
      <button
        className="btnItemCartEliminar"
        onClick={() => removeItem(product.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default ItemCart;
