import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import UseToken from '../Hooks/UseToken';
import Spinner from '../Shared/Spinner';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let singInError;

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = UseToken(user || gUser)
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])

    if (error || gError) {
        singInError = <p className='text-red-600 my-6'>{error?.message || gError?.message}</p>
    }
    if (loading || gLoading) {
        return <Spinner></Spinner>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-4xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
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

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
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

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                            </label>
                        </div>
                        {singInError}
                        <input className="input input-bordered w-full max-w-xs text-white text-xl bg-black" type="submit" value="Login" />
                    </form>
                    <p className='text-md font-bold my-4'>New on doctor portal? <Link className='text-secondary ' to="/signup">SignUP</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline text-xl" onClick={() => signInWithGoogle()}>Login With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;