import React from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from '../components/Dashboard/Dashboard';
import ErrorPage from '../components/ErrorPage';
import { HomeNav } from '../components/HomeNavBar';
import { Login } from '../components/Login';
import { HomePage } from '../components/MainHomePage';
import { Register } from '../components/Register';

import PrivateRoutes from './PrivateRoutes';

const Routes = () => {
    return (
        <>
            <Switch>

                {/* HOMEPAGE */}
                <Route path="/" exact>
                    <HomeNav />
                    <HomePage />
                </Route>

                {/* REGISTER PAGE */}
                <Route path="/register" exact>
                    <HomeNav />
                    <Register />
                </Route>

                {/* LOGIN PAGE */}
                <Route path="/login" exact>
                    <HomeNav />
                    <Login />
                </Route>

                {/* DASHBOARD PAGE */}
                <PrivateRoutes path="/dashboard">
                    <Dashboard />
                </PrivateRoutes>

                {/* ERROR PAGE */}
                <Route>
                    <HomeNav />
                    <ErrorPage />
                </Route>

            </Switch>
        </>
    )
}

export default Routes;