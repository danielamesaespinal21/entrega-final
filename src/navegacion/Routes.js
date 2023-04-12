import Contact from "../Routes/Contact";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import Favs from "../Routes/Favs";
import Login from "../Routes/Login";


export const navegacion = [

    {
        id: 1,
        path: "/home",
        Element: Home
    },
    {
        id: 2,
        path: "/contact",
        Element: Contact
    },
    {
        id: 3,
        path: "/users/:id",
        Element: Detail
    },
    {
        id: 4,
        path: "/favs",
        Element: Favs
    }

]

export { Login }