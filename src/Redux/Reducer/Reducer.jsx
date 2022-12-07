import { Counter, AllData, secondCounter } from "../Type";

const ReducerCounter = (state = 0, action) => {
    switch (action.type) {
        case Counter: {
            return state = action.payload
        }
        default: {
            return state
        }
    }
}

const AllDataReducer = (state = {}, action) => {
    switch (action.type) {
        case AllData: {
            return state = action.payload
        }
        default: {
            return state
        }
    }
}

const AllDataDoubleReducer = (state = {}, action) => {
    switch (action.type) {
        case secondCounter: {
            return state = action.payload
        }
        default: {
            return state
        }
    }
}

export { AllDataReducer, ReducerCounter, AllDataDoubleReducer }