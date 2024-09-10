import React, { useState } from "react";
export default function TextForm({ mode, heading }) {
  const handleUpClick = () => {
    let upperCase = text.toUpperCase();
    setText(upperCase);
  };
  const handleLowClick = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleRemoveSpaces = () => {
    let newText = text.split(/[" "]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4 mt-4">{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            value={text}
            style={{
              backgroundColor: mode === "dark" ? "13466e" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
