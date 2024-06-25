import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginForm from "./pages/login/Login";
import Router from "./routes/Router";

function App() {
  return (
    <>
      {/* <div className="App">
        <LoginForm />
      </div> */}
      <Router />
    </>
  );
}

export default App;
