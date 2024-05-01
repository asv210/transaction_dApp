import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ConnectionContextProvider } from "./context/ConnectionContext";
ReactDOM.render(
	<React.StrictMode>
	<ConnectionContextProvider>

		<App />
	</ConnectionContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
