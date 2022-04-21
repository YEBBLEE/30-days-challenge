import React, { Component } from 'react';
import Logo from './Logo';
import '../css/Login.css';

class Login extends Component {
    render() {
        return (
            <>
                <Logo/>
                <form className='auth-form'>
                    <label className='input-label' htmlFor='Nickname'>Nickname</label>
                    <input 
                        id='Nickname'
                        className='form-input' 
                        placeholder='Nickname'
                    />
                    <label className='input-label'>Password</label>
                    <input className='form-input' placeholder='Password'/>
                    <label className='input-label'>Email</label>
                    <input className='form-input' placeholder='Email'/>
                    <label className='input-label'>Profile URL</label>
                    <input className='form-input' placeholder='Profile URL'/>
                    <button className='form-btn'>Sign up</button>
                </form>
            </>
        );
    }
}

export default Login;