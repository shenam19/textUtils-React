import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpperClick = () => {
    setText(text.toUpperCase());
    props.handleAlert("Converted to Uppercase", "success");
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.handleAlert("Converted to Lowercase", "success");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClearText = () => {
    setText("");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.handleAlert("Extra spaces has been removed", "success");
  };

  const handleTextCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.handleAlert("Text copied", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            onChange={handleChange}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpperClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearText}>
          Reset
        </button>
        <button className="btn btn-primary mx-3" onClick={handleTextCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words,{text.trim().length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
