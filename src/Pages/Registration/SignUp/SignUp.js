import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

    };
    return (
        <div>
            <h2>Please Registraion</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Your Name</label>
                <input {...register("name", { required: true })} className="form-control form-control-lg mb-3" placeholder="Your Name" />

                <label>Your Eamil</label>
                <input type="email" {...register("email", { required: true })} className="form-control form-control-lg mb-3" placeholder="Your Email" />

                <label>Enter Password</label>
                <input type="password" {...register("password", { required: true })} className="form-control form-control-lg mb-3" placeholder="Enter Password" />

                <div className="text-end mt-4">
                    <input className="btn btn-outline-danger btn-lg" type="submit" value="Buy Now" />
                </div>
            </form>
        </div>
    );
};

export default SignUp;