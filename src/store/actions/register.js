import { createActions } from 'redux-actions';

export const { register, registerSuccess, registerFailed } = createActions({
    REGISTER: () => ({
        loading: false,
        loaded: false,
        success: false,
        message: ''
    }),
    REGISTERSUCCESS: ({
        loading: false,
        loaded: true,
        success: true,
        message: ''
    }),
    REGISTERFAILED: ({
        loading: false,
        loaded: true,
        success: false,
        message: 'register failed'
    })
})
