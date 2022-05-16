import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const SingUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let singInError;
    if (user || gUser) {
        console.log(user || gUser)
    }
    if (error || gError) {
        singInError = <p className='text-red-600 my-6'>{error?.message || gError?.message}</p>
    }
    if (loading || gLoading) {
        return <Spinner></Spinner>
    }

    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-4xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Your name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("text", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    }
                                })}
                            />

                            <label class="label">
                                {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.text.message}</span>
                                }
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                placeholder="Your email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Provide a valid email"
                                    },
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    }
                                })}
                            />

                            <label class="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                placeholder="Your password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    minLength: {
                                        value: 6,
                                        message: "Password must be greater then 6 character"
                                    },
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    }
                                })}
                            />

                            <label class="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                            </label>
                        </div>
                        {singInError}
                        <input class="input input-bordered w-full max-w-xs text-white text-xl bg-black" type="submit" value="SignUp" />
                    </form>
                    <p className='text-md font-bold my-4'>Already have an account? <Link className='text-secondary ' to="/login">Please Login</Link></p>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline text-xl" onClick={() => signInWithGoogle()}>Login With Google</button>

                </div>
            </div>
        </div>
    );
};

export default SingUp;