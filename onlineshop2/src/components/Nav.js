import { Link } from "react-router-dom";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import './nav.css'
export function Nav() {
    const {cartItems} = useContext(ShopContext)
    const itemCount = cartItems.reduce((prev,current)=>{
        return prev + current.count
    },0)

    return (
        <React.Fragment>

            <nav class="navbar navbar-expand-lg bg-dark px-4 sticky-top">
                <div class="container-fluid ">
                    <a class="navbar-brand text-white" href="#">MohsenSarvariStyle</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-link active text-white" aria-current="page" >Shop</Link>
                            <Link to="/cart" class="nav-link active text-white" aria-current="page" >
                                <FontAwesomeIcon icon={faShoppingCart} />
                                {itemCount> 0 && <span className="cart-items-count">{itemCount}</span> }
                            </Link>
                            
                            
                            <a class="nav-link text-white" href="#">Pricing</a>
                            <a class="nav-link text-white" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>

    )
}