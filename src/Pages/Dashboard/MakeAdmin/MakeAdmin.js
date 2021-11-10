import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // axios.post('https://limitless-beyond-03016.herokuapp.com/addTourPlans', data)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             alert('Tour Plans Details Added Successfully');
        //             reset();
        //         }
        //     })

    }
    return (
        <div>
            <Container>
                <h1 className="fw-bold mb-4">Make your <span className="text-info">Admin</span></h1>
                <Row className="d-flex">
                    <Col md={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input type="email" {...register("admin")} className="form-control form-control-lg mb-3" placeholder="Enter Email Address" />
                            <input className="btn btn-info text-white" type="submit" value="Make Admin" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;