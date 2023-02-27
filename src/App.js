import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Form from "./components/FormPage/Form";
import Privacy from "./components/Privacy/Privacy";
import Modal from "./components/Modal/modal";
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userinfo");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
      setIsUserLoggedIn(true);
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              isUserLoggedIn={isUserLoggedIn}
              setIsUserLoggedIn={setIsUserLoggedIn}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route
          path="/form"
          element={<Form isUserLoggedIn={isUserLoggedIn} />}
        />
        <Route path="/submitted" element={<Modal />} />
        <Route path="*" component={<div>Error 404</div>} />
      </Routes>
    </div>
  );
}

export default App;
