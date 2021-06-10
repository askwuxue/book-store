import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Shop from './core/Shop';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/shop" component={Shop} exact></Route>
            </Switch>
        </BrowserRouter>
    )
}
