import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(''); 

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

      let createError;
    if(error || resetError){
        createError = error.message.split(' ')[2].split('/')[1].split(')')[0];
    }
 
    if(loading || sending){
         <Loading></Loading>
    }

    if(user){
        navigate(from, { replace: true });
    }


    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = (e) => { 
        setPassword(e.target.value);
         
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const handleReset = () => {
        if(email){
            sendPasswordResetEmail(email);
            setErr('');
            toast('Sent Email')
        }
        else{
            setErr('Enter Your Email Then Reset Password')
        }
    }


    return (
        <div className='login-form p-3 md:w-2/4 mx-auto '>
            <div className='text-center font-semibold text-rose-700'>
                <p>{createError}</p> 
                <p>{err}</p> 
            </div>
            
            <h1 className='text-center text-3xl text-rose-400 mt-5'>Please Login</h1>
            <form onSubmit={handleSubmit}> 
                <input onBlur={handleEmailBlur} type="text" placeholder='Enter Your Email' required/>
                <br />
                <input onChange={handlePasswordBlur} type="text" placeholder='Enter Your Password' required/>
                <br />
                <input className='font-semibold bg-rose-100 hover:bg-rose-200' type="submit" value="Login" />
            </form>

            <div className='mt-5'>
                <p className=' '>New to Mechanic? <Link to='/register' className='text-blue-500'>Registration</Link></p>

                <p>Forget Password? <button onClick={handleReset} className='text-blue-500'> Reset </button></p>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;