import { useState, useEffect } from "react";
import "./App.css";

import {
  initFacebookSdk,
  fbLogin,
  getFacebookLoginStatus,
} from "../utils/FacebookSDK";

function App() {
  useEffect(() => {
    console.log("Started use effect");
    initFacebookSdk();

    getFacebookLoginStatus().then((response) => {
      if (response == null) {
        console.log("No login status for the person");
      } else {
        console.log(response);
      }
    });
  }, []);

  function login() {
    console.log("reached log in button");
    fbLogin().then((response) => {
      console.log(response);
      if (response.status === "connected") {
        console.log("Person is connected");
      } else {
        console.log("Person is not connected");
      }
    });
  }

  return (
    <div>
      <button onClick={login}>Login to FB</button>
    </div>
  );
}

export default App;
