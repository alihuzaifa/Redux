import { AllData, Counter, secondCounter } from "../Type";

const AllDataFunc = data => {
    return {
        type: AllData,
        payload: data,
    }
}

const CounterFunc = data => {
    return {
        type: Counter,
        payload: data,
    }
}

const DoubleCounterFunc = data => {
    return {
        type: secondCounter,
        payload: data,
    }
}

export { AllDataFunc, CounterFunc, DoubleCounterFunc }