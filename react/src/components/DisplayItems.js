import React from "react";

export default function DisplayItems({ list }) {
  const changeStyle = event => {
    console.log(event);
  };

  return (
    <div>
      <ol>
        {list.map((e, i) => (
          <li key={i} onClick={changeStyle}>
            {" "}
            {e.item}, importance {e.importance}
          </li>
        ))}
      </ol>
    </div>
  );
}
