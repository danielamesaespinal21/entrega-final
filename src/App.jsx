import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";


function App() {
  return (
      <BrowserRouter className="App">
        <Routes>
          <Route path="/home" element = {<Home/>}/>
        </Routes>
          <Navbar/>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
