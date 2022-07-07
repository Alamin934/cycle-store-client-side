import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('Admin Added Successfully');
                    // reset();
                }
            })

    }
    return (
        <div>
            <Container>
                <h1 className="fw-bold mb-4">Make your <span className="text-info">Admin</span></h1>
                <Row className="d-flex">
                    <Col md={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input type="email" {...register("email")} className="form-control form-control-lg mb-3" placeholder="Enter Email Address" />
                            <input className="btn btn-info text-white" type="submit" value="Make Admin" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;