import Navbar from "./components/Navbar/Navbar";
import React, { Component }  from 'react';
import { BrowserRouter } from "react-router-dom";
import BodyContent from "./components/BodyContent/BodyContent";


function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <BodyContent/>
    </div>
      
  );
}

export default App;
