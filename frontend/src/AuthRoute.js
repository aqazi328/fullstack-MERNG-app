import React, { Component, useContext } from 'react';
import {Navigate,Route} from 'react-router-dom';
import {AuthContext} from './auth';

function AuthRoute({component: Component, ...rest}){
    const {user} = useContext(AuthContext);

    return(
        <Route
            {...rest}
            render={(props)=> user ? <Navigate to="/" /> : <Component {...props}/>
            }
        />
    );

}

export default AuthRoute;