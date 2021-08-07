import React from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from '../components/Dashboard/Dashboard';
import ErrorPage from '../components/ErrorPage';
import PrivateRoutes from './PrivateRoutes';

const Routes = () => {
    return (
        <Switch>

            {/* LANDING PAGE */}
            <Route exact path="/">
                
            </Route>

            {/* DASHBOARD PAGE */}
            <PrivateRoutes path="/dashboard">
                <Dashboard />
            </PrivateRoutes>

            {/* ERROR PAGE */}
            <Route>
                <ErrorPage />
            </Route>

        </Switch>
    )
}

export default Routes;