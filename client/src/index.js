import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./reisterServiceworker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
