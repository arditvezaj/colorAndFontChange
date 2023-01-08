import React, { useState } from "react";

import classes from "./App.module.css";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [fontSize, setFontSize] = useState("small");
  const [inputText, setInputText] = useState("");
  const [inputSize, setInputSize] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.fontSize = fontSize;
    document.body.children[1].children[0].children[0] = inputText;
    document.body.children[1].children[0].children[3] = inputSize;
  };

  const changeBackgroundColor = (event) => {
    setBackgroundColor(event.target.value);
  };

  const changeFontSize = (event) => {
    setFontSize(event.target.value);
  };

  const changeInputText = (event) => {
    setBackgroundColor(event.target.value);
  };

  const changeInputSize = (event) => {
    setFontSize(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label>Write a background color:</label>
      <input type="text" onChange={changeInputText} />
      <label>Write a font size:</label>
      <input type="text" onChange={changeInputSize} />
      <label>Choose a background color:</label>
      <input
        type="radio"
        name="backgroundColor"
        value="red"
        checked={backgroundColor === "red"}
        onChange={changeBackgroundColor}
      />{" "}
      Red
      <input
        type="radio"
        name="backgroundColor"
        value="green"
        checked={backgroundColor === "green"}
        onChange={changeBackgroundColor}
      />{" "}
      Green
      <input
        type="radio"
        name="backgroundColor"
        value="blue"
        checked={backgroundColor === "blue"}
        onChange={changeBackgroundColor}
      />{" "}
      Blue
      <label>Choose a font size:</label>
      <input
        type="radio"
        name="fontSize"
        value="small"
        checked={fontSize === "small"}
        onChange={changeFontSize}
      />{" "}
      Small
      <input
        type="radio"
        name="fontSize"
        value="medium"
        checked={fontSize === "medium"}
        onChange={changeFontSize}
      />{" "}
      Medium
      <input
        type="radio"
        name="fontSize"
        value="large"
        checked={fontSize === "large"}
        onChange={changeFontSize}
      />{" "}
      Large
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default App;
