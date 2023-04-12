import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
export const endPoint = "https://jsonplaceholder.typicode.com/users";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [datos, setDatos] = useState([]);
  

  const getDatos = async () => {
    const res = await fetch(endPoint);
    const data = await res.json();
    console.log(data);
    setDatos(data);
  };

  useEffect(() => {
    getDatos();
  }, []);


  return (
    <main className="card-grid" >
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        <div className='card1'>
          {
            datos.length
            ? datos.map((detail) =>
              <
                Card key={detail.id}
                name={detail.name}
                username={detail.username}
                id={detail.id}
              />)
            : null
          }
        </div>
      </div>
    </main>
  )
}

export default Home