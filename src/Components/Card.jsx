import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextFav } from "../context/ContextFav";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextFav);

  const addFav = () => {
  dispatch({type:"ADD", payload:{name, username, id}})
  };
  const borrarFav = () => {
    dispatch({ type: "REMOVE", payload: { name, username, id } })
  };

  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="doctor" style={{ width: "15vw" }} />
      <p>{name}</p>
      <p>{username}</p>
      {state.data.some((element) => element.id === id) ? (
        <button onClick={borrarFav} className="favButton">
          Borrar fav
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          Agregar fav
        </button>
      )}
      <Link to={`/users/${id}`}>ver mas</Link>
    </div>
  );
};

export default Card;
