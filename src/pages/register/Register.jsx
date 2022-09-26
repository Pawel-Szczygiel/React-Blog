import './register.css';

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
                    id="pass" />
                <button className='login-btn'>Register</button>
            </form>
                <button className='login-register-btn'>Login</button>
        </div>
     );
}
 
export default Register;