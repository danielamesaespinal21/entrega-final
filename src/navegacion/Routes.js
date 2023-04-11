import Contact from "../Routes/Contact";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import Favs from "../Routes/Favs";


export const navegacion = [

    {
        id: 1,
        path: "/",
        Element: Home
    },
    {
        id: 2,
        path: "/contact",
        Element: Contact
    },
    {
        id: 3,
        path: "/users/detail",
        Element: Detail
    },
    {
        id: 4,
        path: "/favs",
        Element: Favs
    }

]

// export { login }