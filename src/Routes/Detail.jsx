import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { endPoint } from './Home';



const Detail = () => {
  const [dentista, setDentista] = useState([]);
  const {id}=useParams()

  const getDentista = async () => {
    const res = await fetch(`${endPoint}/${id}`);
    const data = await res.json();
    console.log(data);
    setDentista(data);
  };

  useEffect(() => {
    getDentista();
  }, []);


  return (
    <div className='table'>
      <h1>Detail Dentist id </h1>
      <p className='td'>{dentista.id}</p>
      <p className='td'>{dentista.username}</p>
      <p className='td'>{dentista.email}</p>
      <p className='td'>{dentista.name}</p>
      <p className='td'>{dentista.phone}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail