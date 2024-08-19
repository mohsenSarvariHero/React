import { useState } from "react";

import "../assets/css/style.css";

function Mine() {
  const [listtask, setListTask] = useState([
    { id: 1, task: "454" },
    { id: 2, task: "454" },
  ]);
  const [inputvalue, setInputValue] = useState("");
  const newInput = (e) => {
    setInputValue(e.target.value);
  };
  const insert = () => {
    const newList = {
      id: listtask.length === 0 ? 1 : listtask[listtask.length - 1].id + 1,
      task: inputvalue,
    };
    setListTask([...listtask, newList]);
  };
  const deletee = (idDel) => {
    setListTask(listtask.filter((item) => item.id !== idDel));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" value={inputvalue} id="item" onChange={newInput} />
        </div>
        <button className="btn" onClick={insert}>
          Add
        </button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {listtask.map((item) => {
          return (
            <li>
              <label>
                <input type="checkbox" />
                {item.task}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deletee(item.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Mine;
