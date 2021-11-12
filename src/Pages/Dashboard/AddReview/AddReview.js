import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://rocky-badlands-58533.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thank you for your feedback, Review added successfully');
                    reset();
                }
            })

    }
    return (
        <div>
            <Container>
                <h1 className="fw-bold mb-4">Please Give Your<span className="text-info"> Feedback</span></h1>
                <Row className="d-flex">
                    <Col xs={12} md={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {user.displayName && <input {...register("name", { required: true })} className="form-control form-control-lg mb-3" defaultValue={user.displayName} />}

                            {user.email && <input {...register("email", { required: true })} className="form-control form-control-lg mb-3" defaultValue={user.email} />}

                            {user.photoURL && <input {...register("photoUrl", { required: true })} className="form-control form-control-lg mb-3" defaultValue={user.photoURL} />}

                            <input {...register("rating", { required: true, min: 1, max: 5, })} className="form-control form-control-lg mb-3" placeholder="Rating: Out of 5" />
                            <p>{errors.rating && "Rating is required & Max rating is 5"}</p>

                            <textarea rows="4" {...register("description", { required: true })} className="form-control form-control-lg mb-3" placeholder="Description"></textarea>
                            <p>{errors.description && "Description is required"}</p>

                            <div className="text-end mt-4">
                                <input className="btn btn-info btn-lg text-white" type="submit" value="Submit" />
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddReview;