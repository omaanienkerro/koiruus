import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('appState')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/kirjaudu', state: { from: props.location } }} />
    )} />
)