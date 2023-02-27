import "./modal.css";
import React from "react";
// import { Link } from "react-router-dom";
const modal = () => {
  return (
    <div id="modal-div">
      <h1 id="form-sub">Your form got submitted successfully</h1>
      {/* <Link to="/" id="home-link">
        Ok
      </Link> */}
      <p>You can now close this tab</p>
    </div>
  );
};

export default modal;
