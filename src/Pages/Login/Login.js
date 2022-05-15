import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user)
    }
    if (error) {
        console.log(error)
    }
    if (loading) {
        <p>loading</p>
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div>
                        <h2 class="text-center text-4xl font-bold">Login</h2>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <p className='font-bold'>Your Email</p>
                            </label>
                            <input type="text" placeholder="Type here" class="input bg-base-200 w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <p className='font-bold'>Your Password</p>
                            </label>
                            <input type="text" placeholder="Type here" class="input bg-base-200 w-full max-w-xs" />
                        </div>
                    </div>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline text-xl" onClick={() => signInWithGoogle()}>Login With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;