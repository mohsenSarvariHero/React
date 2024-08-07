import React from "react"
import { PRODUCTS } from "../../data/Products"
import { Product } from "./Product"

export function Shop() {
    return (
        <React.Fragment>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Hello Friend</strong> Welcome to onlineShop , have enjoy time

            </div>
            <h1>Shop</h1>
            <div className="row">
                {PRODUCTS.map((product) => {

                    return <Product data={product} key={product.id} />
                })}
            </div>

        </React.Fragment>

    )
}