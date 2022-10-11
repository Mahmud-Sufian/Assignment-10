import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const NotFound = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div>
            <p className='font-mono text-center text-rose-300 my-40'>error <span className='text-4xl'>404</span></p>
        </div>
    );
};

export default NotFound;