import React, { useState} from 'react';
import { ServerResponse } from "../../models/models";
import { useDispatch, useSelector } from "react-redux";
import { mockApiAction } from "../../store/mockApi/favourites.slice";
import { RootState } from "../../store";

interface CartFilmProps {
    films: ServerResponse;
}

const CartFilm: React.FC<CartFilmProps> = ({ films }) => {
    const { addFavourites, removeFavourites } = mockApiAction;
    const dispatch = useDispatch();
    const { favourites } = useSelector((state: RootState) => state.favouriteFilms);
const [fav, setIsFav] = useState(favourites.includes(films.Title))

    const addToFavouriteFilm = (filmAdd: string) => {
        dispatch(addFavourites(filmAdd));
        setIsFav(true)
    }

    const removeFavouritesFilm = (filmRemove: string) => {
        dispatch(removeFavourites(filmRemove));
        setIsFav(false)
    }

    return (
        <div className=' m-4 font-bold text-gray-600 hover:-translate-y-1.5 transition hover:shadow-xl'>
            {
                <div className='accent-gray-50' >
                    <h1 className='text-center'>Title: {films.Title}</h1>
                    <h2 className='text-center'>Year: {films.Year}</h2>
                    <div className={'absolute pl-2'}>
                        {!fav ? (
                            <button className='text-3xl text-white'
                                    onClick={() => addToFavouriteFilm(films.Title)}
                            >
                                &#9733;
                            </button>
                        ) : (
                            <button className='text-3xl text-orange-600'
                                    onClick={() => removeFavouritesFilm(films.Title)}
                            >
                                &#9733;
                            </button>
                        )}
                    </div>
                    <div className=''>
                        <img
                            className='bg-cover w-[100%] h-[235px]'
                            src={films.Images[0]}
                            alt="Image"
                        />
                    </div>
                </div>
            }
        </div>
    );
};

export default CartFilm;
