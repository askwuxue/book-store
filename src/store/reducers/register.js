import { handleActions } from 'redux-actions';
// import { register, registerSuccess, registerFailed } from '../actions/register';

const initState = {
    loading: false,
    loaded: false,
    success: false,
    message: ''
}

// 创建reducer saga的特殊匹配方式[action name]
// TODO 如何将action的type进行替换
export const registerReducer = handleActions({
    'REGISTER': (state, action) => ({
        loading: true,
        loaded: false,
        success: false,
        message: ''
    }),
    'REGISTERSUCCESS': (state, action) => ({
        loading: false,
        loaded: true,
        success: true,
        message: ''
    }),
    'REGISTERFAILED': (state, action) => ({
        loading: false,
        loaded: true,
        success: false,
        message: action.message
    }),
    'REGISTERRESET': (state, action) => ({
        loading: false,
        loaded: false,
        success: false,
        message: ''
    })
}, initState)
