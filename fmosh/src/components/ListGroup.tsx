//import React from "react";

import ShowCity from "./ShowCity";

//import {Fragment} from "react";
function ListGroup() {
  const country = ["london", "paris", "tokyo", "new york", "Iran"];
  const getmessaage = () => {
    return country.length === 0 ? <p>NO item list</p> : <h3>list Items</h3>;
  };
  const showItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <h1>List group</h1>
      {getmessaage()}
      {country.length >= 3 && <p>more than three country</p>}
      <ul className="list-group list-group-flush">
        {country.map((city, index) => {
          return <ShowCity city={city} index={index} onSelectItem={showItem} />;
        })}
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default ListGroup;
