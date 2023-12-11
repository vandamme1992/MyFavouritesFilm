import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {Link} from "react-router-dom";


const FavouritesPage = () => {
    const {favourites} = useSelector((state: RootState) => state.favouriteFilms);

    const {login} = useSelector((state: RootState) => state.auth)
    console.log(login)

    return (
        <div className=' text-center pt-20 font-bold items-center'>
            {login ? (
            <div>
                <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 "
                      to={'/'}>Go back</Link>
                {favourites.length === 0 ? <div>Empty...</div> :
                    (
                        <ul>
                            {favourites.map((film: string) => (
                                <li key={film}>
                                    {film}
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
            ) : <h3> <Link className={'hover:text-green-500'} to={'/login'}>please log in</Link></h3>
            }
        </div>
    );
};

export default FavouritesPage;
