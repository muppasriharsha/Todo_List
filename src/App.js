import React, { useState } from "react";
import "./styles.css";
import InputSection from "./components/Inputsection";
import ListSection from "./components/Listsection";
import Listcount from "./components/Listcount.js";

// const intitialState = ["apple", "banana", "grapes"];

const intitialStateUpdated = [
  {
    name: "apple",
    status: false
  },
  {
    name: "banana",
    status: false
  },
  {
    name: "grapes",
    status: false
  }
];

//"apple", "banana", "grapes"];

const App = () => {
  const [mainList, setMainList] = useState(intitialStateUpdated);
  const [task, settask] = useState([]);

  const addToMyList = (element) => {
    if (element === -1) {
      setMainList(intitialStateUpdated);
    } else {
      let newArray = [...mainList];
      newArray.push({
        name: element,
        status: false
      });
      setMainList(newArray);
    }
  };

  const removeElementFromMainList = (index) => {
    // let newArray = [...mainList];
    // newArray.splice(index, 1);
    // setMainList(newArray);
    const completedTask = mainList.map((ele, ele_index) => {
      if (index === ele_index) {
        ele.status = !ele.status;
      }
      return ele;
    });
    setMainList(completedTask);
    completedtask();
  };

  const remove = (index) => {
    let newArray = [...mainList];
    newArray.splice(index, 1);
    setMainList(newArray);
  };
  const completedtask = () => {
    let tc = mainList.filter((ele) => {
      return ele.status === true;
    });
    settask(tc);
  };
  return (
    <div className="App">
      <h1>To Do List</h1>

      <InputSection dataUpdate={(element) => addToMyList(element)} />
      <Listcount
        count={mainList.length}
        ctask={task.length}
        //itask={}
      />
      {/*This is the list displaying part */}
      <ListSection
        data={mainList}
        dataRemove={(index) => removeElementFromMainList(index)}
        datadelete={(index) => remove(index)}
      />
    </div>
  );
};

export default App;
