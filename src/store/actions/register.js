import { createActions } from 'redux-actions';

// export const { register, registerSuccess, registerFailed } = createActions({
//     REGISTER: (value) => ({ ...value }),
//     REGISTERSUCCESS: (value) => ({ ...value }),
//     REGISTERFAILED: (value) => ({ ...value })
// })

// 创建action 参数为type
export const register = createActions('REGISTER');
export const registerSuccess = createActions('REGISTERSUCCESS');
export const registerFailed = createActions('REGISTERFAILED');