import {createBrowserRouter} from "react-router-dom";
import Main from "../components/Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
    },

])
