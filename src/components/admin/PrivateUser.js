import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isLogin from '../../utils/auth'

export default function PrivateUser({ component: Component, ...rest }) {
    return (
        // TODO Route的render接受一个回调函数，回调函数的结果作为Route显示的内容
        <Route render={() => {
            const jwt = isLogin();
            if (jwt && jwt.user.role === 0) return <Component {...rest}></Component>
            return <Redirect to="/login"></Redirect>
        }}>
        </Route>
    )
}
