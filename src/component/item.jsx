import { Link } from "react-router-dom"


const Item = ({ product }) => {
    return (
        
            <article className="articleItem">
            <div className="productos">
            <Link style={{textDecoration:'none'}} key={product.id} to={`/Item/${product.id}`} >
            <div className="divImg"><img className="img" src={product.image} /> </div>
            <h2   className="info">{product.title}</h2>
            <h3 className='price'><span style={{color:'white'}}>${product.price}</span></h3>
            </Link>
            </div >
            </article>
        
        
        

    )
}

export default Item
