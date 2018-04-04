import React from "react";
import ReactDOM from "react-dom";
import { add } from "./add.rs";

import "./index.css";

const App = () => (
  <div className="App">
    <h1 className="App-Title">{add(2, 3)}</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
