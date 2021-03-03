import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { register } from '../services/register';

const Register = () => {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [responseMessage, setResponseMessage] = useState('')
    const history = useHistory()

    const handlePasswordClick = async () => {
        try {
            const { data, status } = await register({ account, password })
            localStorage.setItem('foneapi', data)

            if (status === 200) {
                window.location.href = '/message'
            }
        } catch (error) {
            setResponseMessage(error.response.data)
        }
    }

    const handleLoginClick = () => {
        history.push('/login')
    }

    return <>
        <div className='mt-3'>
            <div className='container'>
                <h1>Register</h1>
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
                        <button type="submit" className="btn btn-primary mb-3" onClick={handlePasswordClick}>Register</button>
                    </div>
                </div>
                <small>
                    Already have an account?
                    <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleLoginClick}> Login</span>
                </small>
            </div>
        </div>
    </>
}

export default Register;