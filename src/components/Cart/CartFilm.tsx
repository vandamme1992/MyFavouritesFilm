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
        <div className='flex-1 m-4 font-bold text-gray-600'>
            {
                <div className='' >
                    <h1 className='hover:bg-gray-200 transition-all'>Title: {films.Title}</h1>
                    <h2 className='hover:bg-gray-200 transition-all'>Year: {films.Year}</h2>
                    <div className={'absolute pl-2'}>
                        {!fav ? (
                            <button className='text-3xl text-black hover:text-orange-600'
                                    onClick={() => addToFavouriteFilm(films.Title)}
                            >
                                &#9733;
                            </button>
                        ) : (
                            <button className='text-3xl text-orange-600 hover:text-black'
                                    onClick={() => removeFavouritesFilm(films.Title)}
                            >
                                &#9733;
                            </button>
                        )}
                    </div>

                    <div className='min-w-[300px] min-h-[200px]'>
                        <img
                            className=''
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
