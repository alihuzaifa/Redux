import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterFunc, AllDataFunc, DoubleCounterFunc } from "../Redux/Actions/Action"

const Tester = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => { dispatch(CounterFunc(state?.ReducerCounter + 1)) }}>+</button>
            <button onClick={() => { dispatch(CounterFunc(state?.ReducerCounter - 1)) }}>-</button>
            <button onClick={() => { dispatch(DoubleCounterFunc(state?.ReducerCounter + 2)) }}>++</button>

        </>
    )
}

export default Tester
