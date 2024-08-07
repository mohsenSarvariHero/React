import { useContext } from 'react'
import './product.css'
import { ShopContext } from '../../context/ShopContext'
export function Product(props) {
    const {id , productName , price , productImage} = props.data;
    const {cartItems , addToCart , removeFromCart}= useContext(ShopContext)
    return (
        <div className="col-3 container" >
            <p><img  className="image" src={productImage} /></p>
            <div className='middle'>
                <div className='text'>
                    <h3>{productName}</h3>
                </div>
            </div>
            <h1>{productName}</h1>
            <h3>price : {price}$</h3>
            <br />
            <button className="btn btn-primary" onClick={()=> addToCart(id)}>+</button>
            <span className="mx-1">{cartItems?.filter((row) => row.id === id)[0]?.count}</span>
            <button className="btn btn-primary" onClick={()=> removeFromCart(id)} >-</button>
            <p></p>
        </div>

    )
}