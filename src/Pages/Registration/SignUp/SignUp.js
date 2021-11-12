import React from 'react';
import { Alert, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const { userRegistration, user, isLoading, error } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const history = useHistory();

    const onSubmit = data => {
        userRegistration(data.email, data.password, data.name, history)
        reset();
    };
    return (
        <div className="py-5">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={8}>
                        <Card className="p-4 bg-light justify-content-center">
                            <h2 className="mb-3 fw-bold text-center">Welcome to <span className="text-info">Neon Cyclez</span></h2>
                            <div>
                                <h3 className="text-center my-4">Please Registraion</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <input {...register("name", { required: true })} className="form-control form-control-lg mb-3" placeholder="Your Name" />

                                    <input type="email" {...register("email", { required: true })} className="form-control form-control-lg mb-3" placeholder="Your Email" />

                                    <input type="password" {...register("password", { required: true })} className="form-control form-control-lg mb-3" placeholder="Enter Password" />

                                    <div className="mt-4">
                                        <input className="btn btn-info text-white btn-lg w-100" type="submit" value="SignUp" />
                                    </div>

                                    <div className="text-center mt-4 fs-5">
                                        <NavLink to="/signin" className="text-dark" style={{ textDecoration: 'none' }}>Already have an Account? Please SignIn</NavLink>
                                    </div>
                                    <div className="text-center">
                                        {isLoading && <Spinner animation="border" variant="info" />}
                                        {user?.email && <Alert variant="success">User Registration Successfully</Alert>}
                                        {error && <Alert variant="error">{error}</Alert>}
                                    </div>
                                </form>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;