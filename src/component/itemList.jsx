import Item from "./item";

function ItemList({ products }) {
    
    return (
        <div style={{height:'150vh',marginTop:'20vh'}}  className="item-list">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}

        </div>
    )
}

export default ItemList