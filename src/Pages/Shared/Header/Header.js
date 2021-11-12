import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const userImg = 'https://i.ibb.co/sQtppYT/user-img.png';
    const { user, logOut, setUser } = useAuth();

    let history = useHistory();
    let redirect_uri = '/';
    /* REDIRECT TO HOME PAGE BY LOG OUT */
    const handleLogOut = () => {
        logOut()
            .then(() => {
                history.push(redirect_uri);
                setUser({});
            })
    }
    return (
        <div>
            <Navbar bg="light" className="fw-bold" expand="lg">
                <Container>
                    <Navbar.Brand className="fs-4 text-info" as={NavLink} to="/">Neon Cyclez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center text-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/allCycles">All Cycles</Nav.Link>
                            {!user.email ?
                                <span>
                                    <Nav.Link as={NavLink} to="/signin">SignIn</Nav.Link>
                                </span>
                                :
                                <div className="d-lg-flex d-block">
                                    <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                                    <button className=" py-2 btn btn-dark" onClick={handleLogOut}>Log Out</button>
                                </div>
                            }
                            {/* User Name */}
                            <div className="mt-2 ms-3">
                                {user?.email && <div>
                                    {user?.photoURL ? <img width="45" className="rounded-pill mx-auto d-block" src={user?.photoURL} alt="" />
                                        : <img width="45" className="rounded-pill mx-auto d-block" src={userImg} alt="" />}
                                    <span className="d-block">{user.displayName}</span>
                                </div>}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;