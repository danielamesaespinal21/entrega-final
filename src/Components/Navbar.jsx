import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextTema } from "../context/ContextTema";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { isTema, setIsTema } = useContext(ContextTema);
  const manejoTema = () => {
    if (isTema) {
      setIsTema(false);
    } else {
      setIsTema(true);
    }
  };
  return (
    <nav className={isTema ? "dark" : "noDark"}>
      <div className="nav">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button className="favButton">
          <Link to="/login">Salir</Link>
        </button>

        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button className="favButton" onClick={manejoTema}>
          Change theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
