import {createBrowserRouter} from "react-router-dom";
import Main from "../components/Main/Main";
import FavouritesPage from "../pages/FavouritesPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const routes  = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
    },
{
        path: '/favourites',
        element: <FavouritesPage/>,
        errorElement: <ErrorPage/>
    },
{
        path: '/login',
        element: <LoginPage/>,
        errorElement: <ErrorPage/>,

    },
    {
        path: '/register',
        element: <RegisterPage/>,
        errorElement: <ErrorPage/>,

    },
{
        path: '/',
        element: <Main/>,
    },

])
