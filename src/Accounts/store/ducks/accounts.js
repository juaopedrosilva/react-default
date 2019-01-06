import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  login: ['data'], 
});

/**
 * Handlers
 */
const INITIAL_STATE = { typePage: true };
  
const login = (state = INITIAL_STATE, action)=> [
    Object.keys(action.data).map(res => console.log(action.data[res].value))
];
  

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login, 
});