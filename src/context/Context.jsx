import React, {useState, createContext} from 'react'

export const Context = createContext({});

const ContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(localStorage.getItem("auth") ? true : false);

    const manejoLogin=()=>{
    setIsLogged(true)
    localStorage.setItem("auth",true)

    }

    const estado = {
    isLogged,
    manejoLogin,
    };
    return <Context.Provider value={estado}>{children}</Context.Provider>;
};

export default ContextProvider