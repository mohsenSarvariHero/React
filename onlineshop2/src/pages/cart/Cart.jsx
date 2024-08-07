import { ShopContext } from "../../context/ShopContext"
import { useContext } from "react"
import React from "react"
import { PRODUCTS } from "../../data/Products"
import { Product } from "../shop/Product"
export function Cart() {
    const { cartItems, setCartItem } = useContext(ShopContext)
    const deletee = () => {
        setCartItem(cartItems.map((item) => {
            return { ...item, count: 0 }
        }))
    }
    return (
        <React.Fragment>
            <div className="row">
                {PRODUCTS.map((p) => {
                    if (cartItems.some((i) => i.id === p.id && i.count > 0))
                        return <Product data={p} ></Product>
                })}


            </div>
            <button onClick={deletee}>reset</button>
        </React.Fragment>

    )
}