import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!",
// );

const jsxHeading=(<h1 id="heading" className="head ">
    This is React element using JSX
    </h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

console.log(jsxHeading)// JS object
root.render(jsxHeading);
