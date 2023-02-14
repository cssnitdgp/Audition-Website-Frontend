import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import "./helper.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_TOKEN}>
		<App />
	</GoogleOAuthProvider>
);
