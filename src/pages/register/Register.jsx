import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return ( 
        <div className='register'>
            <form  className="register-form">
            <span className="register-title">Register</span>
                <label htmlFor='user'>Username</label>
                <input 
                    type="text" 
                    className='login-input' 
                    placeholder='Enter your name...' 
                    id="user" 
                    autoComplete='username'
                />
                <label htmlFor='email'>Email</label>
                <input 
                    type="email" 
                    className='login-input' 
                    placeholder='Enter your email' 
                    id="email" 
                />
                <label htmlFor="pass">Password</label>
                <input 
                    type="password" 
                    className='login-input' 
                    placeholder='Enter your password' 
                    id="pass" 
                    autoComplete='current-password'
                    />
                    
                <button className='login-btn'>
                    <Link to='/register'>Register</Link>
                </button>
            </form>
                <button className='login-register-btn position'>
                    <Link to='/login'>Login</Link>
                </button>
        </div>
     );
}
 
export default Register;