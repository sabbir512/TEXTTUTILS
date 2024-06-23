import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log('upperCase was clicked' + text );
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Successfully convert to uppercase", "success");
  };

  const handleOnChanged = (event) => {
    // console.log('on change');
    setText(event.target.value);
  };

  const handleLowerCase = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
    props.showAlert("Successfully convert to lower", "success");
  };

  const handlecapitalize = () => {
    let capitalize = text
      .split(" ")
      .map((word) => {
        let firstWord = word.slice(0, 1);
        let rest = word.slice(1);
        firstWord = firstWord.toUpperCase();
        return `${firstWord}${rest}`;
      })
      .join(" ");

    setText(capitalize);

    props.showAlert("Successfully convert to capitalize", "success");
  };

  const handleClear = () => {
    let clear = " ";
    setText(clear);
    props.showAlert("All texted cleared", "danger");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Successfully text copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Successfully removed all extra spaces", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2f3a61",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            onChange={handleOnChanged}
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerCase}
        >
          Convert to lowercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handlecapitalize}
        >
          Convert to capitalize
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClear}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove ExtraSpace
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read for slow people
        </p>
        <p>
          {0.004 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          Minutes to read for avg people
        </p>
        <h2>Preview blew</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something In The Textbox To See Your Text"}
        </p>
      </div>
    </>
  );
}
