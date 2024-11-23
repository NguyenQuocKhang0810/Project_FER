import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FacebookAuthProvider,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in Successfully');
            window.location.href = '/';
            toast.success('User logged in Successfully', {
                position: 'top-center'
            });
        } catch (error) {
            console.log(error.message);

            toast.error(error.message, {
                position: 'bottom-center'
            });
        }
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result);
            const user = result.user;
            if (result.user) {
                await setDoc(doc(db, 'Users', user.uid), {
                    firstName: user.displayName,
                    photo: user.photoURL
                });
                toast.success('User logged in Successfully', {
                    position: 'top-center'
                });
                window.location.href = '/';
            }
        });
    };

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result);
            const user = result.user;
            if (result.user) {
                await setDoc(doc(db, 'Users', user.uid), {
                    firstName: user.displayName,
                    photo: user.photoURL
                });
                toast.success('User logged in Successfully', {
                    position: 'top-center'
                });
                window.location.href = '/';
            }
        });
    };

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-xl dark:bg-gray-800'>
                <h2 className='text-3xl font-bold text-center mb-4 dark:text-gray-100'>
                    Sign In
                </h2>
                <p className='text-center text-gray-600 mb-6 dark:text-gray-300'>
                    New to Our Product?{' '}
                    <Link className='text-blue-600' to='/register'>
                        Create an Account
                    </Link>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label
                            htmlFor='email'
                            className='block text-gray-700 dark:text-gray-300'
                        >
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            id='email'
                            placeholder='Enter Email Address or Phone Number'
                            className='w-full p-3 mt-2 border border-gray-300 dark:bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='password'
                            className='block text-gray-700 dark:text-gray-300'
                        >
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                            id='password'
                            placeholder='Enter Password'
                            className='w-full p-3 mt-2 border border-gray-300 dark:bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                    </div>
                    <div className='flex items-center justify-between mb-4'>
                        <label className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                className='form-checkbox h-4 w-4 text-blue-600 dark:border-gray-300'
                            />
                            <span className='ml-2 text-gray-700 dark:text-gray-300'>
                                Keep me signed in
                            </span>
                        </label>
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300'
                    >
                        Sign in
                    </button>
                </form>
                <div className='text-center mt-4'>
                    <a href='#' className='text-blue-600'>
                        Forgot your password?
                    </a>
                </div>
                <div className='flex items-center my-6'>
                    <hr className='flex-grow border-t border-gray-300' />
                    <span className='mx-3 text-gray-500'>
                        Or sign in using:
                    </span>
                    <hr className='flex-grow border-t border-gray-300' />
                </div>
                <div className='space-y-4'>
                    <button
                        className='w-full flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300'
                        onClick={signInWithGoogle}
                    >
                        <img
                            src='https://www.google.com/favicon.ico'
                            alt='Google'
                            className='h-5 w-5 mr-2'
                        />
                        Continue with Google
                    </button>
                    <button
                        className='w-full flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300'
                        onClick={signInWithFacebook}
                    >
                        <img
                            src='https://www.facebook.com/favicon.ico'
                            alt='Facebook'
                            className='h-5 w-5 mr-2'
                        />
                        Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signin;
