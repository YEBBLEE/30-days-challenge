import React,{useState} from 'react';
import Logo from './Logo';
import '../css/Login.css';

const Login = (props) => {
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
            const reqOptions = {
                method: 'POST',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nickname, password, email, url})
            };

            fetch(`http://localhost:8080/auth/signup`,reqOptions)
                .then(res => {
                    const result = res.json();
                    console.log(result);
                    if(res.status > 299 || res.status < 200 ) {
                        const msg = result && result.message ?
                        result.message : 'Something Wrong!';
                        const error = new Error(msg);
                        throw error;
                    }
                    return result;
                })
                .then((result) => {
                    const {token, nickname} = result;
                    console.log(token);
                    console.log(nickname);
                })
                .catch(error => console.log('error', error));
        } else {
            //로그인 요청
            const reqOptions = {
                method: 'POST',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nickname, password })
            };

            fetch(`http://localhost:8080/auth/login`,reqOptions)
                .then(res => {
                    const result = res.json();
                    console.log(result);
                    if(res.status > 299 || res.status < 200 ) {
                        const msg = result && result.message ?
                        result.message : 'Something Wrong!';
                        const error = new Error(msg);
                        throw error;
                    }
                    return result;
                })
                .then((result) => {
                    const {token, nickname} = result;
                    console.log(token);
                    console.log(nickname);
                })
                .catch(error => console.log('error', error));
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
                {!signup && (
                    <button 
                        className='form-btn'
                        onClick={handleNewAccountBtn}
                    >
                        Create a New Account 👻
                    </button>
                )}
                <button className='form-btn' type='submit'>
                    {signup ? 'Sign Up' : 'Log In'}
                </button>
            </form>
        </>
    );
};

export default Login;