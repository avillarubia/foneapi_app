import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { login } from '../services/auth';

const Login = () => {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [responseMessage, setResponseMessage] = useState('')
    const history = useHistory();

    const handlePasswordClick = async () => {
        try {
            const { data, status } = await login({ account, password })

            localStorage.setItem('foneapi', data)

            if (status === 200) {
                window.location.href = '/message'
            }
        } catch (error) {
            setResponseMessage(error.response.data)
        }
    }

    const handleRegisterClick = () => {
        history.push('/register')
    }

    return <>
        <div className='mt-3'>
            <div className='container'>
                <h1>Login</h1>
                <p>{responseMessage}</p>
                <div className="mb-3 row">
                    <label for="staticAccount" className="col-sm-2 col-form-label">Account</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="staticAccount" onChange={e => setAccount(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3" onClick={handlePasswordClick}>Login</button>
                    </div>
                </div>
                <small>
                    No account?
                    <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleRegisterClick}> Register</span>
                </small>
            </div>
        </div>
    </>
}

export default Login;