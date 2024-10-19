
interface ICategory {
  params : {catid : string},
  searchPrams : {}
}
const Category = ({params} : ICategory) => {
  console.log("here : " , params.catid)
return (
  <div>
    product name
  </div>
)
}

export default Category
