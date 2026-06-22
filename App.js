import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="head ">
    This is Title Component
  </h1>
);
// Component Composition
const HeaderComponent = () => {
  return (
    <div id="container">
        <Title/>
      <h1 className="heading"> React Functional Component </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


root.render(<HeaderComponent />);
