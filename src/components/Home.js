import React from 'react';
import { ContainerMovies } from './ContainerMovies';
import { Search } from './Search.js';

export const Home = () => {
    return (
        <>
            <Search />
            <ContainerMovies />
        </>
    )
}
