import * as React from "react";

const Listcount = (props) => {
  return (
    <div>
      <p>
        Toatal List - {props.count}
        <br />
        Cancled list - {props.ctask}
        <br />
        incomplete task-{props.count - props.ctask}
      </p>
    </div>
  );
};
export default Listcount;
