const productList = [
  {
    id: "1",
    title: "آداپتور",
    price: "260",
    image: "/images/adaptor.jpg",
  },
  {
    id: "2",
    title: "هنذفری",
    price: "200",
    image: "/images/airpod.jpg",
  },
  {
    id: "3",
    title: "دوربین",
    price: "450",
    image: "/images/camera.jpg",
  },
  {
    id: "4",
    title: "لباس",
    price: "500",
    image: "/images/denim.jpg",
  },
  {
    id: "5",
    title: "محافظ صفحه",
    price: "99",
    image: "/images/glass.jpg",
  },
  {
    id: "6",
    title: "هد فون",
    price: "199",
    image: "/images/headphone.jpg",
  },
  {
    id: "7",
    title: "لپ تاپ",
    price: "3000000",
    image: "/images/laptop.jpg",
  },
  {
    id: "8",
    title: "گوشی همراه",
    price: "8000000",
    image: "/images/mobile.jpg",
  },
];

const getProductData = (id) => {
  let productData = productList.find((item) => item.id === id);
  return productData;
};

export { productList, getProductData };
