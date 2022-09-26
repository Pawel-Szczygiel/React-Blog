import './login.css';

const Login = () => {
    return ( 
        <div className='login'>
            <form  className="login-form">
                <span className="login-title">Login</span>
                <label htmlFor='email'>Email</label>
                <input type="email" className='login-input' placeholder='Enter your email' id="email" />
                <label htmlFor="pass">Password</label>
                <input type="password" className='login-input' placeholder='Enter your password' id="pass"  />
                <button className='login-btn'>Login</button>
            </form>
                <button className='login-register-btn'>Register</button>
        </div>
     );
}
 
export default Login;