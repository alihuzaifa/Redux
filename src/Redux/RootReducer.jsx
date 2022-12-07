import { combineReducers } from "redux";
import { AllDataReducer, ReducerCounter, AllDataDoubleReducer } from "./Reducer/Reducer";

export default combineReducers({
    AllDataReducer,
    ReducerCounter,
    AllDataDoubleReducer
})