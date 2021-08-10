import React, { useState } from "react";

const Inputsection = (props) => {
  // console.log("all props", props);
  // const item = {
  //   listInput : "",
  //   listInput1 : ""

  // };
  //Take a variable to set the value from front end to it.
  const [inputvalue, setInputValue] = useState();

  const getValueFromField = (e) => {
    setInputValue(e.target.value);
  };

  const submitToMainList = (value) => {
    props.dataUpdate(value);
    setInputValue("");
  };

  return (
    <div style={{ backgroundColor: "#FF0000", padding: 8 }}>
      <input
        type="text"
        name="listInput"
        placeholder="Enter Item"
        onChange={(e) => getValueFromField(e)}
        style={{ width: "80%", height: 28 }}
        value={inputvalue}
      />
      {/* <input
        type="text"
        name="listInput1"
        placeholder="Enter Item"
        onChange={(e) => getValueFromField(e)}
        style={{ width: "80%", height: 28 }}
        value={inputvalue.listInput1}
      /> */}
      <button
        onClick={() => submitToMainList(inputvalue)}
        style={{ height: 34 }}
      >
        Add
      </button>
      <button onClick={() => submitToMainList(-1)} style={{ height: 34 }}>
        Clear
      </button>
    </div>
  );
};

export default Inputsection;
