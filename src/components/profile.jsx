import React, { useState } from 'react';
import { updatePassword } from '../services/account'
import { getCurrentUser } from '../utils/user';

const Profile = () => {
    const [password, setPassword] = useState('')
    const user = getCurrentUser()

    const handleUpdateClick = async () => {
        await updatePassword({ account: user.account, password })
    }

    return <>
        <div className='container'>
            <div className='mt-5 w-25'>
                <label>Change Password</label>
                <input type="text" className="form-control" onChange={e => setPassword(e.target.value)} />
                <button className='btn btn-primary' onClick={handleUpdateClick}>Update</button>
            </div>
        </div>
    </>
}

export default Profile;