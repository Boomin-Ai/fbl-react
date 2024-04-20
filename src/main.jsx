import React from "react";
import { FacebookProvider } from "react-facebook";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FacebookProvider
      autoLogAppEvents={true}
      cookie={true}
      xfbml={true}
      version="v19.0"
      appId="3718972341677268"
    >
      <App />
    </FacebookProvider>
  </React.StrictMode>
);
