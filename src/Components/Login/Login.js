import React from 'react';
import useFirebase from '../../Hooks/useFirebsse';

const Login = () => {
    const { singInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login !!</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={singInWithGoogle}>Google Sign In</button>
            </div>
            <form>

                <input type="email" name="" id="" placeholder='Enter your email' />
                <br />
                <input type="password" name="" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />

            </form>
        </div>
    );
};

export default Login;