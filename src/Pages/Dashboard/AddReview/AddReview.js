import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddReview = () => {
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
                <h1 className="fw-bold mb-4">Please Give Your<span className="text-info"> Feedback</span></h1>
                <Row className="d-flex">
                    <Col xs={12} md={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("name")} className="form-control form-control-lg mb-3" defaultValue="User Name" />

                            <input {...register("email")} className="form-control form-control-lg mb-3" defaultValue="User Email" />

                            <input type="number" {...register("rating")} className="form-control form-control-lg mb-3" placeholder="Ratign: Out of 5" />

                            <textarea rows="4" {...register("description")} className="form-control form-control-lg mb-3" placeholder="Description"></textarea>

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