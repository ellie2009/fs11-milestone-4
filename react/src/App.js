import React, { useState } from "react";
import "./App.css";
import DisplayItems from "./components/DisplayItems";
import EnterItem from "./components/EnterItem";

function App() {
  const [toDo, setToDo] = useState([
    { item: "Task 1", importance: "high" },
    { item: "Task 2", importance: "medium" },
    { item: "Task 3", importance: "low" }
  ]);

  const displayNew = abc => {
    console.log(abc);
    console.log(abc.text);
    setToDo([
      ...toDo,
      {
        item: abc.text,
        importance: abc.sth
      }
    ]);
  };

  return (
    <div className="App">
      <h3>To Do List</h3>
      {/* {toDo[2].item} */}

      <div>
        <EnterItem getNewItem={abc => displayNew(abc)} />
      </div>

      <p>Tasks to complete:</p>
      <DisplayItems list={toDo} />
    </div>
  );
}

export default App;
