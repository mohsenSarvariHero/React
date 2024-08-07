import { createContext, useState } from "react";

export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItem] = useState([])
    //     [
    //         {id : 1 , count : 1} , [id : 2 , count : 1]
    //     ]


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

    //or

    // const addToCart = (itemId)=>{
    // if(cartItems?.find((item)=>item.id === itemId ))
    //    setCartItem(cartItems.map((item) =>{
    //         if(item.id === itemId)
    //            return {...item , count : item.count + 1 }
    //    }))
    // else  setCartItem([...cartItems , {id : itemId , count : 1}])
    // }

    const removeFromCart = (itemId) => {
        setCartItem(cartItems.map((i) => {
            if (i.id === itemId) return { ...i, count: i.count === 0 ? 0 : i.count - 1 }
            else return i
        }))
    }

    const contexValue = { cartItems, addToCart, removeFromCart }

    return <ShopContext.Provider value={contexValue} >{props.children}</ShopContext.Provider>
}