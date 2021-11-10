import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddPlans = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://limitless-beyond-03016.herokuapp.com/addTourPlans', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Tour Plans Details Added Successfully');
                    reset();
                }
            })

    }
    return (
        <div className="py-5">
            <Container>
                <h1 className="fw-bold text-center mb-4">Add New <span className="text-danger">Tour Plans</span></h1>
                <Row className="d-flex justify-content-center">
                    <Col md={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Plans Title</label>
                            <input {...register("title")} className="form-control form-control-lg mb-3" placeholder="Plans Title" />

                            <label>Price</label>
                            <input type="number" {...register("price")} className="form-control form-control-lg mb-3" placeholder="Price" />

                            <label>Location</label>
                            <input {...register("location")} className="form-control form-control-lg mb-3" placeholder="Location" />

                            <label>Descrioption</label>
                            <textarea rows="4" {...register("description")} className="form-control form-control-lg mb-3" placeholder="Description"></textarea>

                            <label>Banner URL</label>
                            <input {...register("url")} className="form-control form-control-lg mb-3" placeholder="Insert Image URL" />

                            <div className="text-end mt-4">
                                <input className="btn btn-danger btn-lg" type="submit" value="Add Tour Plans" />
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddPlans;