import React from 'react';
import { Alert, Button, Card, Col, Container, InputGroup, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Signin.css';

const Signin = () => {
    const { signInUsingGoogle, userSignIn, isLoading, user, error } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        userSignIn(data.email, data.password, history, location)
        reset();
    };

    const handleGoogleLogIn = () => {
        signInUsingGoogle(history, location)
    }

    return (
        <div className="py-5 my-5">
            <div>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md={8}>
                            <Card className="p-4 bg-light justify-content-center">
                                <h2 className="mb-3 fw-bold text-center">Welcome to <span className="text-info">Neon Cyclez</span></h2>
                                <div>
                                    <h3 className="text-center my-4">Please SignIn</h3>
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <input type="email" {...register("email", { required: true })} className="form-control form-control-lg mb-3" placeholder="Your Email" />

                                        <input type="password" {...register("password", { required: true })} className="form-control form-control-lg mb-3" placeholder="Enter Password" />

                                        <div className="mt-4">
                                            <input className="btn btn-info text-white btn-lg w-100" type="submit" value="SignIn" />
                                        </div>
                                        <div className="text-center mt-4 fs-5">
                                            <NavLink to="/signup" className="text-dark" style={{ textDecoration: 'none' }}>New User? Please Create an Account</NavLink>
                                        </div>
                                        <div className="text-center">{isLoading && <Spinner animation="border" variant="info" />}
                                            {user?.email && <Alert variant="success">User Login Successfully</Alert>}
                                            {error && <Alert variant="error">{error}</Alert>}
                                        </div>
                                    </form>
                                </div>
                                <p className="text-center my-4">---------or---------</p>
                                <div className="text-center">
                                    <InputGroup className="mb-3 text-center justify-content-center">
                                        <div className="bg-light rounded shadow" style={{ width: 'auto' }}>
                                            <img width="25" className="m-3" src="https://i.ibb.co/pKfFv9L/google-logo.png" alt="" />
                                        </div>
                                        <Button className="shadow w-auto text-white" onClick={handleGoogleLogIn} variant="info" size="lg">Signin with Google</Button>
                                    </InputGroup>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Signin;