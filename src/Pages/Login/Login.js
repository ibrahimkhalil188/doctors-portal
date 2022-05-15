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
                    <h2 class="text-center text-4xl font-bold">Login</h2>
                    <form>



                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt">Alt label</span>
                        </label>
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt">Alt label</span>
                        </label>
                        <input type="submit" value="Login" placeholder="Type here" class="input input-bordered bg-black text-white text-xl w-full max-w-xs" />
                    </form>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline text-xl" onClick={() => signInWithGoogle()}>Login With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;