import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");
const curretnTime = new Date().getHours();
let greeting;
const customStyle = {
  color: ""
};
if (curretnTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (curretnTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(<h1 style={customStyle}>{greeting}</h1>, root);
