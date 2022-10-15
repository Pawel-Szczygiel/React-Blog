import './register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);


    async function handleRegister(e) {
        e.preventDefault();
        setError(false); 
        if (!username && !email && !password) return ;

        try {
            const res = await axios.post('auth/register', {
                username, email, password
            });
            console.log(res.data);
            if (res.data !== 'The user already exists!') {
                setUsername('');
                setEmail('');
                setPassword('');
                res.data && window.location.replace('/login');
            }

            setError(true);
            
        } catch (error) {
            setError(true);
        }
    }

    return ( 
        <div className='register'>
            <form onSubmit={handleRegister}  className="register-form">
                <span className="register-title">Register</span>
                    <label htmlFor='user'>Username</label>
                    <input 
                        type="text" 
                        className='login-input' 
                        placeholder='Enter your name...' 
                        id="user" 
                        autoComplete='username'
                        required
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                    <label htmlFor='email'>Email</label>
                    <input 
                        type="email" 
                        className='login-input' 
                        placeholder='Enter your email' 
                        id="email" 
                        required
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <label htmlFor="pass">Password</label>
                    <input 
                        type="password" 
                        className='login-input' 
                        placeholder='Enter your password' 
                        id="pass" 
                        autoComplete='current-password'
                        required
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        />
                        
                    <button className='login-btn' type='submit'>
                      Register
                    </button>
                    {error && <p className='err'>The user already exists!</p>}
                </form>
                <button className='login-register-btn position'>
                    <Link to='/login'>Login</Link>
                </button>
        </div>
     );
}
 
export default Register;