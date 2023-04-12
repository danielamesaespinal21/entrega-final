import React, { useContext, useState } from 'react'
import { Context } from '../context/Context';
import { useNavigate } from 'react-router-dom';





const Login = () => {
    const [values, setValues] = useState({email:"", password:""});
    const {manejoLogin } = useContext(Context);
    const navigate = useNavigate();    
    const handleSubmit = (e) => {
    e.preventDefault();
    manejoLogin();
    navigate("/home");
    console.log(values);
    };
    return (
        <form id='form' onSubmit={ handleSubmit } className='login' >
        <div className='login1'>
            <h3>Login</h3>
            <input
            name='email'
            size='small'
            type='text'
            label='Email *'
            placeholder='Correo'
            value={values.email}
            onChange={(e) => setValues({...values, email: e.target.value })}
            />  
            <input
            name='password'
            size='small'
            type='password'
            label='Password *'
            placeholder='Contraseña'
            value={values.password}
            onChange={(e) => setValues({...values, password: e.target.value })}
            />  
        <button type='submit' from= "form">
            ingresar
        </button>
        </div>
    </form>
    )
}

export default Login