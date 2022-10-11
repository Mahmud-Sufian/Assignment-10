import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [err, setErr] = useState(''); 

    // create user and verification
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    //   update Name
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    let createError;
    if(error || updateError){
        createError = error?.message?.split(' ')[2]?.split('/')[1]?.split(')')[0];
    }

    
    if(loading || updating){
        <Loading></Loading>
    }

    if(user){ 
        console.log(user);
    }



    const handleNameBlur = (e) => {
        setName(e.target.value);
    }

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = (e) => {
        const pass = e.target.value.length >= 8;
        if(pass){
        setPassword(e.target.value);
        setErr('');
        }
        else{
            setErr('Minimum 8 character password');
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();  

            await createUserWithEmailAndPassword(email, password);
            await updateProfile({displayName: name});
            toast('Sent Email for Verification');
            navigate('/home');

            // setErr('');
        
       
            // setErr('Enter Valid Email and Password')
        
    }


    


    return (
        <div className='p-3 md:w-2/4 mx-auto '>
            <div className='text-center font-semibold text-rose-700'>
                <p>{createError}</p> 
                <p>{err}</p> 
            </div>

            <h1 className='text-center text-3xl text-rose-400 mt-5'>Please Register</h1> 
            <form onSubmit={handleSubmit}>
                <input onBlur={handleNameBlur} type="text" placeholder='Enter Your Name'  required/>
                <br />
                <input onBlur={handleEmailBlur} type="text" placeholder='Enter Your Email' required/>
                <br />
                <input onChange={handlePasswordBlur} type="text" placeholder='Enter Your Password' required/>
                <br />
                <input className='font-semibold bg-rose-100 hover:bg-rose-200' type="submit" value="Register" />
            </form>


            <div className='mt-5'>
            <p className=''>Have an account? <Link to='/login' className='text-blue-500'>login</Link></p>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;