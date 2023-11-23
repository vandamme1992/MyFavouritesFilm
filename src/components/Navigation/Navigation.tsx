import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <div className='flex justify-between mx-[30px]'>
            <Link to={'/login'}>Login</Link>
            <Link to={'/favourites'}>Favourites</Link>
            <Link to={'/register'}>Register</Link>
        </div>

        </>
    );
};

export default Navigation;
