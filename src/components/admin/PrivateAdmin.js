import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isLogin from '../../utils/auth'

export default function PrivateAdmin({ component: Component, ...rest }) {
    return (
        <Route render={() => {
            const jwt = isLogin();
            // token存在并且用户的权限是管理者权限，才渲染组件，否则重定向
            if (jwt && jwt.user.role === 1) return <Component {...rest}></Component>
            return <Redirect to="/login"></Redirect>
        }}></Route>
    )
}
