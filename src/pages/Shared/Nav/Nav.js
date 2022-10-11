import React from 'react';
import './Nav.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../img/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Nav = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    
    const handleLogOut = () => {
        signOut(auth);
        navigate('/login');
    }


    return (
        <nav className='nav-container bg-rose-100 flex items-center justify-between py-2 px-20'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navList">
                <Link to='/home'>Home</Link>
                <Link to='/service'>Service</Link>
                <Link to='/about'>About</Link>
                {
                !user ? <Link to='/login'>Login</Link> 
                : <button onClick={handleLogOut}>Log out</button>}
            </div>
        </nav>
    );
};

export default Nav;