import React, { useState } from "react";
const Todos = () => {
  const [initial, setIninitial] = useState("");
  const [data, setData] = useState([]);

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      getData();
    }
  };

  const getInput = (e) => {
    console.log(e.target.value);
    setIninitial(e.target.value);
  };

  const getData = () => {
    if (initial.trim() !== "") {
      let store = [...data, initial];
      setData(store);
    }
    setIninitial("");
  };
  const deleteTask = (index) => {
    console.log(index);
    let filterData = data.filter((curElem, id) => {
      return id != index;
    });
    setData(filterData);
  };

  return (
    <>
      <div className="container">
        <div className="inputTask">
          <input
            type="text"
            placeholder="Enter Task name..."
            value={initial}
            onChange={getInput}
            onKeyDown={handleEnterPress}
          />
          <button onClick={getData}>Add</button>
        </div>
        <div>
          <h1>Todo Work</h1>
          <hr />
        </div>

        {data.map((curVal, index) => {
          return (
            <>
              <div className="taskData">
                <p>{index+1} . {curVal}</p>
                <i
                  id="deleteIcon"
                  onClick={() => deleteTask(index)}
                  class="fa-solid fa-trash-can"
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Todos;
