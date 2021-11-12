import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const ContactUs = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset();
    }
    return (
        <div>
            <section className="py-5">
                <Container>
                    <h1 className="fw-bold mb-4 text-center">Contact<span className="text-info"> Us</span></h1>
                    <Row className="d-flex justify-content-center">
                        <Col xs={12} md={8}>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input {...register("name", { required: true })} className="form-control form-control-lg mb-3" placeholder="Enter Your Name" />

                                <input {...register("email", { required: true })} className="form-control form-control-lg mb-3" placeholder="Enter Your Email" />

                                <textarea rows="4" {...register("message", { required: true })} className="form-control form-control-lg mb-3" placeholder="Message"></textarea>

                                <div className="text-center mt-4">
                                    <input className="btn btn-info btn-lg w-100 text-white" type="submit" value="SEND" />
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default ContactUs;