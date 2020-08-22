import React from "react";
import Metagross from "./metagross/Metagross";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='App'>
      <Metagross />
      <ToastContainer />
    </div>
  );
}

export default App;
