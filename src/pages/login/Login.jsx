import React ,{ useRef } from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import { useGlobalContext } from '../../context/Context';

import './login.css';

const Login = () => {
    const {user, dispatch , isFetching} = useGlobalContext();


    const userRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault();
        dispatch({type:'LOGIN_START'});
   
            try {
                const res = await axios.post('/auth/login', {
                    username: userRef.current.value,
                    password: passwordRef.current.value
                });
                dispatch({
                    type: 'LOGIN_SUCCESS', 
                    payload: res.data}
                );
    
                userRef.current.value = '';
                passwordRef.current.value = '';
            } catch (error) {
                dispatch({type: 'LOGIN_FAILURE'});
            }
        
        

    };

   


    return ( 
        <div className='login'>
            <form  className="login-form" onSubmit={handleSubmit}>
                <span className="login-title">Login</span>
                <label htmlFor='username'>Username</label>
                <input 
                    type="text" 
                    className='login-input' 
                    placeholder='Enter your username...' 
                    id="username" 
                    autoComplete='true'
                    ref={userRef}
                    />
                <label htmlFor="pass">Password</label>
                <input 
                    type="password" 
                    className='login-input' 
                    placeholder='Enter your password' 
                    id="pass" 
                    autoComplete='current-password' 
                    ref={passwordRef}
                    />
                <button className='login-btn' type='submit' disabled={user} >
                    Login
                </button>
            </form>
                <button className='login-register-btn'>
                    <Link to='/register'>Register</Link>
                </button>
        </div>
     );
}
 
export default Login;