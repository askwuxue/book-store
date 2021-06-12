import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Register from './core/Register';
import Login from './core/Login';
import Shop from './core/Shop';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/shop" component={Shop} exact></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
        </Switch>
    )
}
