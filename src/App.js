import { Outlet } from "react-router-dom";

import "./css/App.css";
import React from "react";

import Home from "./component/Home";
import Footer from "./component/Footer";
import BaymentForm from "./component/BaymentForm";


function App() {
  return (
    <div className="App">
      <Home />
      

      <Outlet />
 
      <Footer/>
      
    </div>
  );
}

export default App;
