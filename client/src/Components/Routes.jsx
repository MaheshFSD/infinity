import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeNav } from './HomeNavBar';
import { Login } from './Login';
import { HomePage } from './MainHomePage';
import { Register } from './Register';


function Routes() {

    return (
        <>
            <HomeNav />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route>
                    <h3>404 | Page Not Found</h3>
                </Route>
            </Switch>

        </>
    )

}

export { Routes }