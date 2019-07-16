import { CHANGE_INPUT, CLEAR_INPUT, RUN_INPUT } from './actionTypes'

const defaultState = {
    inputValue: "计算器",
    equation: "",
}
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        //es6 深复制方法
        let newState = JSON.parse(JSON.stringify(state))
        newState.equation = newState.equation + action.equation
        return newState
    } else if (action.type === CLEAR_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.equation = ""
        return newState
    } else if (action.type === RUN_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.equation = action.result  
        return newState
    }
    return state
};
