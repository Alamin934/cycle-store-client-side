import React from 'react';
import { Button, Card, Col, Container, InputGroup, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Signin.css';

const Signin = () => {
    const { signInUsingGoogle, setError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

    };

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            }).catch(error => {
                setError(error.message);
            })
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