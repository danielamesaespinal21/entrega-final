import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Login, navegacion } from "./navegacion/Routes";
import ContextFavProbider from "./context/ContextFav";
import { ContextTema } from "./context/ContextTema";
import ContextProvider from "./context/Context";

function App() {
  const {isTema}=useContext(ContextTema)
  return (
    <ContextProvider>
    <ContextFavProbider>
    <BrowserRouter className="App">
      <div className={isTema ? "dark" : "noDark"}>
      <Routes>
      <Route path='/login' element={<Login />} />
        <Route>        
          {navegacion.map(({ id, path, Element }) => (
            <Route
              key={id}
              path={path}
              element={
                <>
                  <Navbar />
                  <Element />
                  <Footer />
                </>
              }
            />
          ))}
        </Route>
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
      </div>
    </BrowserRouter>
    </ContextFavProbider>
    </ContextProvider>
  );
}

export default App;
