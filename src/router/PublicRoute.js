import { TOKEN_KEY } from 'app-configs';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
function PublicRoute({ component: Component, needCheckToken = true, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                return <Component {...props} />;
            }}
        />
    );
    if (localStorage.getItem(TOKEN_KEY) && needCheckToken) {
        return <Redirect to="/" />;
    } else
        return (
            <Route
                {...rest}
                render={(props) => {
                    return <Component {...props} />;
                }}
            />
        );
}
export default PublicRoute;
