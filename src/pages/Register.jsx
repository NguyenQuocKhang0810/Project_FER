import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import {
    FacebookAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth, db } from './firebase';
import { toast } from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';
function Register() {
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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, 'Users', user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname,
                    photo: ''
                });
            }
            console.log('User Registered Successfully!!');
            toast.success('User Registered Successfully!!', {
                position: 'top-center'
            });
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: 'bottom-center'
            });
        }
    };
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-xl dark:bg-gray-800'>
                <h2 className='text-3xl font-bold text-center mb-4 dark:text-gray-100'>
                    Create an Account
                </h2>
                <p className='text-center text-gray-600 mb-6 dark:text-gray-300'>
                    Have an Account?{' '}
                    <Link className='text-blue-600' to='/signin'>
                        Sign in
                    </Link>
                </p>
                <form onSubmit={handleRegister}>
                    <div className='mb-4'>
                        <label
                            htmlFor='text'
                            className='block text-gray-700 dark:text-gray-300'
                        >
                            First Name
                        </label>
                        <input
                            type='text'
                            onChange={(e) => setFname(e.target.value)}
                            placeholder='Enter First Name'
                            className='w-full p-3 mt-2 border border-gray-300 dark:bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='text'
                            className='block text-gray-700 dark:text-gray-300'
                        >
                            Last Name
                        </label>
                        <input
                            type='text'
                            onChange={(e) => setLname(e.target.value)}
                            placeholder='Enter Email Address or Phone Number'
                            className='w-full p-3 mt-2 border border-gray-300 dark:bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='email'
                            className='block text-gray-700 dark:text-gray-300'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Email Address or Phone Number'
                            className='w-full p-3 mt-2 border border-gray-300 dark:bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            className='block text-gray-700 dark:text-gray-300'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Create Password'
                            className='w-full p-3 mt-2 border border-gray-300 dark:bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300'
                    >
                        Create Account
                    </button>
                </form>
                <div className='text-center mt-4'>
                    <p>By creating account, you agree to our</p>
                </div>
                <div className='text-center mt-3'>
                    <a href='#' className='text-blue-600'>
                        Term of Service
                    </a>
                </div>
                <div className='flex items-center my-6'>
                    <hr className='flex-grow border-t border-gray-300' />
                    <span className='mx-3 text-gray-500'>
                        Or create account using:
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

export default Register;
