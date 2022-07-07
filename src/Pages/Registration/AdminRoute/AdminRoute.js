import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center py-5">
            <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !user?.email && admin ? (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
};

export default AdminRoute;