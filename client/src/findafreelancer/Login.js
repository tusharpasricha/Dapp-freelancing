import React, { useContext, useState } from 'react';
import AuthContext from '../stores/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {

    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigation = useNavigate();

    const submitHandler = (e) => {

        e.preventDefault();
        setError('');

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        login(email, password).then(user => {
            console.log("Logged In Successfully");
            navigation('/dashboard');
        }).catch(err => {
            setError('Cannot Logged in :(');
            console.log(err);
        })

    }

    return (
        <div className='login'>
            <div className='loginbox'>
            
            <div className='boxleft'>
            
            </div>
            <div className='boxright'>
            {error && <div>{error}</div>}
                <form className='form' onSubmit={submitHandler}>
               
                    
                
                    <h3>Login In</h3>
                    <div>
                        
                        <input placeholder='Email' type="email" name="email" />
                    </div>
                    <div>
                        
                        <input placeholder='Password' type="password" name="password" />
                    </div>

                    <button type="submit">Login</button>

                    
                </form>
                <p>Want to <Link to="/signup">Signup</Link></p>

            </div>
            
            </div>
        </div>
    );

}

export default Login;