import React,{useState} from 'react';
import Logo from './Logo';
import '../css/Login.css';

export function Login({onSignup, onLogin}) {
    const [signup, setSignup] = useState(false);
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [url, setUrl] = useState('');

    const handleNewAccountBtn = (event) => {
        setSignup(true);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(signup) {
            //회원가입 요청
            onSignup(nickname, password, email, url);
        } else {
            //로그인 요청
            onLogin(nickname, password);
        }
    }

    const onChange = (event) => {
        const {name,value} = event.target;

        switch (name) {
            case 'nickname':
                return setNickname(value);
            case 'password':
                return setPassword(value);
            case 'email':
                return setEmail(value);
            case 'url':
                return setUrl(value);
            default:
        }
    }

    return (
        <>
            <Logo/>
            <form className='auth-form' onSubmit={onSubmit}>
                <label className='input-label' htmlFor='Nickname'>
                    Nickname
                </label>
                <input 
                    name='nickname'
                    className='form-input' 
                    placeholder='Nickname'
                    value={nickname}
                    onChange={onChange}
                    required
                />
                <label className='input-label'>
                    Password
                </label>
                <input 
                    name='password'
                    className='form-input' 
                    placeholder='Password'
                    value={password}
                    onChange={onChange}
                    required
                    type="password"
                />
                {signup && (
                    <>
                    <label className='input-label'>
                        Email
                    </label>
                    <input 
                        name='email'
                        className='form-input' 
                        placeholder='Email'
                        value={email}
                        onChange={onChange}
                        required
                    />
                    <label className='input-label'>
                        Profile URL
                    </label>
                    <input 
                        name='url'
                        className='form-input' 
                        placeholder='Profile URL'
                        value={url}
                        onChange={onChange}
                    />
                    </>
                )}
                <div className="btn-wrapper">
                    <button className='form-btn' type='submit'>
                        <span>
                            {!signup ? 'Log In' : 'Sign Up'}
                        </span>
                    </button>
                </div>
                {!signup && (
                    <div className="btn-wrapper">
                    <button 
                        className='form-btn'
                        onClick={handleNewAccountBtn}>
                        <span>Create a New Account 👻</span>
                    </button>
                    </div>
                )}
            </form>
        </>
    );
};

export default Login;