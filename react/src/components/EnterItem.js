import React, { useState } from "react";

export default function EnterItem({ getNewItem }) {
  const [item, setItem] = useState({
    text: "",
    sth: ""
  });

  const submitForm = event => {
    event.preventDefault();
    getNewItem(item);
  };

  const handleChange = event => {
    const input = event.target.name;
    const value = event.target.value;

    setItem({ ...item, [input]: value });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="enterItem">Enter new item:</label>
        <input type="text" id="enterItem" name="text" onChange={handleChange} />
        <label>Something else</label>
        <input type="text" id="something" name="sth" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}
