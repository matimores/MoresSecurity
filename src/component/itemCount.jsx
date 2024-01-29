import React, { useState } from "react";




function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(0);

  
  const onadd = () => onAdd(count);

 

  function Incrementar() {
    if (count < 5) {
      setCount(count + 1);
    }
  }

  function Decrementar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <div className="count">
        <div className="btn">
          <button
            className="custom-btn btn-2"
            disabled={count <= 1}
            onClick={Decrementar}
          >
            -
          </button>
          <p className="button">{count}</p>
          <button
            className="custom-btn btn-2"
            disabled={count >= stock}
            onClick={Incrementar}
          >
            +
          </button>
        </div>

        <button disabled={stock <= 0} onClick={() => onAdd()} className="add">
          AGREGAR AL CARRITO
        </button>
        
      </div>
    </>
  );
}

export default ItemCount;
