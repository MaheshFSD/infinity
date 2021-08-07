import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { loadData } from '../Utils/LocalStorage';

const PrivateRoutes = ({ path, children}) => {
    const {auth} = loadData("data") || false;

    return auth ? 
        (
            <Route path={path}>
                {children}
            </Route>
        ) :
        <Redirect push to="/" />
}

export default PrivateRoutes;