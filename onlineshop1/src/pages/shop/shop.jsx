import React from "react";
import { PRODUCT } from "../../data/products";
import { Product } from "./product";
export function Shop(){
    return(
        <React.Fragment>

            <h1>Shop</h1>
            <div className = "row">
                {PRODUCT.map((product)=>{
                    return <Product key={product.id} data={product} />
                })}
            </div>

        </React.Fragment>

    

    )
}