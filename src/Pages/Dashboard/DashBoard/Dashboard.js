import React from 'react';
import { Col, Nav, Row, Button } from 'react-bootstrap';
import { NavLink, useRouteMatch, Switch, Route, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddBiCycle from '../AddBiCycle/AddBiCycle';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageBiCycle from '../ManageBiCycle/ManageBiCycle';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut } = useAuth();
    let history = useHistory();

    const linkStyle = {
        textDecoration: 'none',
        color: '#000',
        fontWeight: 'bold',
        marginBottom: '5px'
    }

    const handleLogOut = () => {
        logOut(history)
    }
    return (
        <div>
            <div className="p-3 p-md-5">
                <Row className="g-4">
                    <Col xs={12} md={3} className="border-end border-secondary border-2">
                        <Nav className="flex-column">
                            <NavLink to='/home' style={linkStyle}>Home</NavLink>
                            <NavLink to={`${url}/manageAllOrders`} style={linkStyle}>Manage All Orders</NavLink>
                            <NavLink to={`${url}/addBiCycle`} style={linkStyle}>Add A BiCycle</NavLink>
                            <NavLink to={`${url}/manageBiCycle`} style={linkStyle}>Manage BiCycle</NavLink>
                            <NavLink to={`${url}/makeAdmin`} style={linkStyle}>Make Admin</NavLink>

                            <NavLink to={`${url}/myOrders`} style={linkStyle}>My Orders</NavLink>
                            <NavLink to={`${url}/addReview`} style={linkStyle}>Add Review</NavLink>
                            <Button onClick={handleLogOut} variant="info" className="text-white fw-bold mt-2">Log Out</Button>
                        </Nav>
                    </Col>
                    <Col xs={12} md={9}>
                        <Switch>
                            <Route exact path={path}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                            <Route path={`${path}/manageAllOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                            <Route path={`${path}/addBiCycle`}>
                                <AddBiCycle></AddBiCycle>
                            </Route>
                            <Route path={`${path}/manageBiCycle`}>
                                <ManageBiCycle></ManageBiCycle>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>

                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/addReview`}>
                                <AddReview></AddReview>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Dashboard;