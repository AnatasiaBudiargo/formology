import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "./Auth";

function PrivateRoute({ component: Component, ...rest }) {
    // PrivateRoute u/ sebelum ngelakuin yg lain/ akses service harus login dulu
    const { authTokens } = useAuth();

    return ( <
        Route {...rest }
        render = {
            (props) => authTokens ? (
                // ...rest itu semua atribut2 kyk home dll di App.js
                <
                Component {...props }
                />  
            ) : ( < Redirect to = "/Login" / > )
        }
        />
    );
}

export default PrivateRoute;