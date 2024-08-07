import { MouseEvent, useState } from "react";
export interface props {
  city: string;
  index: number;
  onSelectItem: (item: string) => void;
}

function ShowCity({ city, index, onSelectItem }: props) {
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };
  const [selectIndex, setSelectIndex] = useState(-1);
  const change = () => {
    setSelectIndex(index);
    onSelectItem(city);
  };
  return (
    <li
      className={
        selectIndex === index ? "list-group-item active" : "list-group-item"
      }
      key={index}
      // onClick={handleClick}
      onClick={change}
    >
      {city};
    </li>
  );
}

export default ShowCity;
