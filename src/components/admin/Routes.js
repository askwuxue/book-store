import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../core/Home';
import Register from '../core/Register';
import Login from '../core/Login';
import Shop from '../core/Shop';
import UserDashBoard from "./UserDashBoard";
import AdminDashBoard from './AdminDashBoard';
import PrivateUser from './PrivateUser';
import PrivateAdmin from './PrivateAdmin';
import CreateCategory from './CreateCategory';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/shop" component={Shop} exact></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            {/* TODO 处理受保护的地址以及组件的显示 */}
            <PrivateUser path="/user/dashboard" component={UserDashBoard}></PrivateUser>
            <PrivateAdmin path="/admin/dashboard" component={AdminDashBoard}></PrivateAdmin>
            <PrivateAdmin path="/create/category" component={CreateCategory}></PrivateAdmin>
            {/* <Route path="/user/dashboard" component={UserDashBoard}></Route> */}
            {/* <Route path="/admin/dashboard" component={AdminDashBoard}></Route> */}
        </Switch>
    )
}
