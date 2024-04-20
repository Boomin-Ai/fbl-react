/* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
import { useFacebook } from "react-facebook";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const { init } = useFacebook();

  async function handleLogin() {
    const api = await init();
    const res = await api.login("email,public_profile");
  }

  return (
    <div>
      <button onClick={handleLogin}>Login with FaceBook</button>
    </div>
  );
}

export default App;
