import { notFound } from 'next/navigation'
import React from 'react'
interface IProduct {
  params : {catid : string , id : string},
  searchPrams : {}
}
const Product = ({params}  :IProduct) => {
  console.log(params.catid , params.id)
  if(parseInt(params.id) > 100){
    return notFound()
  }
  return (
    <div>
      123
    </div>
  )
}

export default Product