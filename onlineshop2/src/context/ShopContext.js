import { createContext, useState } from "react";

export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItem] = useState([])

    const addToCart = (itemId) => {
        if (!cartItems?.find((item) => item.id === itemId))
            setCartItem([...cartItems, { id: itemId, count: 1 }])
        else
            setCartItem(cartItems.map((item) => {
                if (item.id === itemId)
                    return { ...item, count: item.count + 1 }
                else return item
            }))
    }

    const removeFromCart = (itemId) => {
        setCartItem(cartItems.map((item) => {
            if (item.id === itemId) return { ...item, count: item.count ===0 ? 0 : item.count - 1 }
            else return item
        }))
    }

    const contextValue = { cartItems, addToCart, removeFromCart , setCartItem}

    return <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
}