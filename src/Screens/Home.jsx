import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const state = useSelector(state => state);

    return (
        <>
            <h1>Counter: {state?.ReducerCounter}</h1>
        </>
    )
}

export default Home
