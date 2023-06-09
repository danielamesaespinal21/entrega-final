import React, { useContext } from "react";
import { ContextFav } from "../context/ContextFav";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextFav);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card1">
        {state.data.map((data) => (
          <div key = {data.id}>
            <img src="./images/doctor.jpg" alt="doctor" style={{ width: "15vw" }} />
            <p>{data.name}</p>
            <p>{data.username}</p>
          </div>
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
