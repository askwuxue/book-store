import { handleActions } from 'redux-actions';
import { register, registerSuccess, registerFailed } from '../actions/register';

const initState = {
    loading: false,
    loaded: false,
    success: false,
    message: ''
}

export const registerReducer = handleActions({
    [register]: (state, action) => ({
        ...state
    }),
    [registerSuccess]: (state, action) => ({
        ...state
    }),
    [registerFailed]: (state, action) => ({
        ...state
    })
}, initState)

console.log(registerReducer);