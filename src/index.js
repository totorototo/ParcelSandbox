import React from "react";
import ReactDOM from "react-dom";
import { add } from "./add.rs";

import "./index.css";

console.log(add(2, 3));

const App = () => (
  <div className="App">
    <h1 className="App-Title">Hello Parcel x React</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
