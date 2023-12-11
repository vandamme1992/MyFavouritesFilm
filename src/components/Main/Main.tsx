import React, {memo, useEffect, useMemo, useState} from 'react';
import {useDebounce} from "../../hooks/debounce";
import Spinner from "../../UI/Spinner";
import Header from "../Header/Header";
import CartFilm from "../Cart/CartFilm";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms} from "../../store/mockApi/mockApi.slice";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {ServerResponse} from "../../models/models";


const Main:React.FC = memo(() => {

    interface RootState {
        films: {
            films: [];
            loading: boolean;
        };
    }


    const [searchMovies, setSearchMovies] = useState('')

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const films = useSelector((state: RootState) => state.films.films) as ServerResponse[];
    const loading = useSelector((state: RootState) => state.films.loading);
    const debounced =  useDebounce(searchMovies)
    const [dropDown, setDropdown] = useState(true)


    const filterSearchValue = films.filter((film)=> {
       return  film.Title.toLowerCase().includes(searchMovies.toLowerCase())
    })



    const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        const {value} = e.target
        setSearchMovies(value)
    }

    useEffect(() => {
            dispatch(fetchFilms());
    }, [dispatch, debounced]);


    const itemClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        const target = e.currentTarget as HTMLLIElement;
        setSearchMovies(target.textContent || "");
        setDropdown(false);
        console.log(e);
    };

    const handlerDropdown = () => {
        setDropdown(true)
    }


    return (
        <>
            {loading && <Spinner />}
            <Header/>
            <div className='relative flex justify-center'>
            <input
                onChange={handleSearchChange}
                value={searchMovies}
                className='font-bold flex justify-center mt-10 text-center p-32 py-1 border-2  mx-auto transition-all'
                type="text"
                placeholder={'Search Movies'}
                onClick={handlerDropdown}
            />
            {searchMovies && dropDown &&

            <ul className=' flex flex-col items-center border-4 bg-gray-300
              transition-all absolute top-[100%]
            h-40 w-72 mx-auto mt-1 z-10 overflow-auto list-none '>
                {  filterSearchValue.map(film => {
                    return <li className='cursor-pointer hover:bg-gray-200'
                               onClick={itemClickHandler}
                        key={film.Title}>
                        {film.Title}
                    </li>
                })}
            </ul>
            }
            </div>
                    <div className='grid grid-cols-4 gap-5'>
            {filterSearchValue?.map((films)=>
                <CartFilm
                films={films}
                key={films.Title}
            />)}
        </div>

        </>
    );
});

export default Main;
