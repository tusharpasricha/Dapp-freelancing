import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../stores/AuthContext';
import './login.css'
const Signup = () => {

    const { signup } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigation = useNavigate();

    const submitHandler = (e) => {

        e.preventDefault();
        setError('');

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        console.log(name, email, password, confirmPassword);

        if (password === confirmPassword) {
            signup(email, password).then(user => {
                console.log(user);
                console.log('Signup Successful');
                navigation('/dashboard');
            }).catch(err => {
                setError('Signup Failed');
                console.log(err);
            });
        }

    }

    return (
        <div className='login'>
            <div className='loginbox'>
            <div className='boxleft'>

            </div>
            <div className='boxright'>
            {error && <div>{error}</div>}
            <form className='form' onSubmit={submitHandler}>
                <h3>Signup</h3>
                <div>
                    <input placeholder='Name' type="text" name="name" />
                </div>
                <div>

                    <input placeholder='Email' type="email" name="email" />
                </div>
                <div>
            
                    <input placeholder='Password' type="password" name="password" />
                </div>
                <div>
                    
                    <input placeholder='Confirm Password' type="password" name="confirmPassword" />
                </div>
                <button type="submit">Signup</button>
            </form>
            <p>Have a account <Link to="/">Login</Link></p>
            </div>
            </div>
        </div>
    );

}

export default Signup;