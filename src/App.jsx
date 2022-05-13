import React, { useState } from "react";
import "./App.css";

//Start by logging into or creating a replit account
//Then fork this replit into you own account

//We would like you to create a form input with a submit button
//that allows a user to type strings and save them to an array.
//That array of strings should be rendered to the screen in a list.
//each press of the submit button adds another string to the list, and thus, the screen.
//Good Luck!

//Send the link of your forked challenge to PridePlaces upon completion

function App() {
  const [theArray, setTheArray] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setTheArray([...theArray, `${event.target.input.value}`]);
  };

  return [
    <form onSubmit={handleSubmit}>
      {theArray.map((entry) => (
        <div>{entry}</div>
      ))}
      <label>
        <p>Your Input Here</p>
        <input name="input" />
      </label>
      <button type="submit">Submit</button>
    </form>,
  ];
}

export default App;
