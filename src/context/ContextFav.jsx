import React, { createContext, useReducer } from "react";
export const ContextFav = createContext({});

const manejoFav = (state, action) => {
    switch (action.type) {
    case "ADD":
        localStorage.setItem(
        "fav",
        JSON.stringify([...state.data, action.payload])
        );
        return {
        ...state,
        data: [...state.data, action.payload],
        };
    case "REMOVE":
        const resultado = state.data.filter(
        (elemento) => elemento.id !== action.payload.id
        );
        localStorage.setItem("fav", JSON.stringify(resultado));
        return {
        ...state,
        data: resultado,
        };

    default:
        return {
        ...state,
        };
    }
};

const ContextFavProbider = ({children}) => {
    const initialState = { data: [] };

    const [state, dispatch] = useReducer(manejoFav, initialState);

    const State = { state, dispatch };

    return <ContextFav.Provider value={State}>{children}</ContextFav.Provider>;
};

export default ContextFavProbider;
