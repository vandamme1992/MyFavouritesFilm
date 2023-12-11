import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelector} from "../../store/auth/authSlice";

const Navigation = () => {
    const inLogin = useSelector(authSelector)
    return (
        <>
        <div className='flex justify-between mx-[30px]'>
            <Link to={'/login'}>Login</Link>
            <Link to={'/favourites'}>Favourites</Link>
            { !inLogin && <Link to={'/register'}>Register</Link>}
        </div>

        </>
    );
};

export default Navigation;
