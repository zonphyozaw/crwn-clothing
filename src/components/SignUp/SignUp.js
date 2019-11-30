import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomerButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/FirebaseUtils';

import './SignUp.scss';
import CustomButton from '../CustomButton/CustomButton';

const SignUp = () => {
    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        setState({
            displayName: '',
            email: '',
            password: '',
            comfirmPassword: ''
        });
    };


    return (
        <div className='sign-up'>
            <h2 className='title'>I no not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                
                <FormInput
                    type='text'
                    name='displayName'
                    value={state.displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required />

                <FormInput
                    type='email'
                    name='email'
                    value={state.email}
                    onChange={handleChange}
                    label='Email'
                    required />

                <FormInput
                    type='password'
                    name='password'
                    value={state.password}
                    onChange={handleChange}
                    label='Password'
                    required />
                    
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={state.confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required />

                <CustomButton type='submit'></CustomButton>
            </form>
        </div>
    )
}

export default SignUp;
