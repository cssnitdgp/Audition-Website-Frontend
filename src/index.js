import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./helper.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_TOKEN}>
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
);
