import { Addproduct } from "./components/Addproduct";
import { Productlist } from "./components/Productlist";
import { useEffect, useState } from "react";
function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:8000/productList");
      const responseData = await response.json();
      setProductList(responseData);
    };
    sendRequest();
  }, []);
  //chatgpt
  // const addTolist = async (title) => {
  //   try {
  //     // Assuming title is a string, we'll wrap it in an object
  //     const response = await fetch("http://localhost:8000/productList", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ title }), // send title as an object
  //     });

  //     const responseData = await response.json();

  //     // Assuming productList and setProductList are part of your state
  //     setProductList((prevProductList) => [...prevProductList, responseData]);
  //   } catch (error) {
  //     console.error("Failed to add product to list:", error);
  //   }
  // };

  // const addTolist = (title) => {
  //   const id = Math.floor(Math.random() * 10000);

  //   const newProducts = { id, title };
  //   setProductList([...productList, newProducts]);
  //   // // };
  // };
  const addTolist = async (title) => {
    const response = await fetch("http://localhost:8000/productList", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    const responseData = await response.json();

    setProductList([...productList, responseData]);
  };
  // const addTolist = async (title) => {
  //   const response = await fetch("http://localhost:8000/productList", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(title),
  //   });
  //   const responseDate = await response.json();
  //   setProductList([...productList, responseDate]);

  //   const id = Math.floor(Math.random() * 10000);

  //   const newProducts = { id, title };
  //   setProductList([...productList, newProducts]);
  // // };
  // setProductList((currentList) => {
  //   return [
  //     ...currentList,
  //     {
  //       id:
  //         currentList.length === 0
  //           ? 1
  //           : currentList[currentList.length - 1].id + 1,
  //       title,
  //     },
  //   ];
  // });

  const deletee = async (id) => {
    await fetch(`http://localhost:8000/productList/${id}`, {
      method: "DELETE",
    });
    setProductList(productList.filter((item) => item.id !== id));
  };
  return (
    <div className="container">
      <Addproduct addTolist={addTolist} />

      <Productlist
        products={productList}
        deletee={deletee}
        addTolist={addTolist}
      />
    </div>
  );
}

export default App;
