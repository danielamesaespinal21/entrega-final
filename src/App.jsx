import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { navegacion } from "./navegacion/Routes";
import Home from "./Routes/Home";
import ContextFavProbider from "./context/ContextFav";

function App() {
  return (
    <ContextFavProbider>
    <BrowserRouter className="App">
      <Routes>
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
      </Routes>
    </BrowserRouter>
    </ContextFavProbider>
  );
}

export default App;
