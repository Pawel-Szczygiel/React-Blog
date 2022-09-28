import './login.css';
import { Link } from 'react-router-dom';


const Login = () => {
    return ( 
        <div className='login'>
            <form  className="login-form">
                <span className="login-title">Login</span>
                <label htmlFor='email'>Email</label>
                <input type="email" className='login-input' placeholder='Enter your email' id="email" />
                <label htmlFor="pass">Password</label>
                <input type="password" className='login-input' placeholder='Enter your password' id="pass" autoComplete='current-password' />
                <button className='login-btn'>
                    <Link to='/login'>Login</Link>
                </button>
            </form>
                <button className='login-register-btn'>
                    <Link to='/register'>Register</Link>
                </button>
        </div>
     );
}
 
export default Login;