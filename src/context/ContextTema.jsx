import React, { createContext, useState } from "react";

export const ContextTema = createContext({});

const ContextTemaProvider = ({ children }) => {
    const [isTema, setIsTema] = useState(false);
    const estado = {
    isTema,
    setIsTema,
    };
    return <ContextTema.Provider value={estado}>{children}</ContextTema.Provider>;
};

export default ContextTemaProvider;
