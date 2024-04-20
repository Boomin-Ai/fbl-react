// import { useState, useEffect } from "react";
import { FacebookProvider, LoginButton } from "react-facebook";
import "./App.css";

function App() {
  const onError = (e) => {
    console.log(e);
  };

  const onSuccess = (res) => {
    console.log(res);
  };

  return (
    <FacebookProvider appId="3718972341677268">
      <LoginButton onError={onError} onSuccess={onSuccess}>
        Continue with Facebook
      </LoginButton>
    </FacebookProvider>
  );
}

export default App;
