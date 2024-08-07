import React , {useContext} from "react"
import { ShopContext } from "../../context/shopContext"
import { PRODUCT } from "../../data/products"
import { Product } from "../shop/product"
export function Cart(){
    const {cartItems}= useContext(ShopContext)
    return(
        <React.Fragment>
            <h1>Your Cart Items ...</h1>
            <div className="row">
                {PRODUCT.map((p)=>{
                    if(cartItems.some((i)=> i.id === p.id && i.count > 0))
                       return <Product  data={p} ></Product>
                })}
            </div>

        </React.Fragment>

    )
}