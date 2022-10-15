
const LoginStart = userCredentials => ({type: 'LOGIN_START'});

const LoginSuccess = user => ({type: 'LOGIN_SUCCESS', payload: user});

const LoginFailure = () => ({type: 'LOGIN_FAILURE'});

const LogOut = () => ({type: 'LOGOUT'});

export {
    LoginStart,
    LoginSuccess,
    LoginFailure,
    LogOut
};