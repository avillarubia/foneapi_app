import React from 'react';
import { NavLink } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../utils/user';

const Header = () => {
    const user = getCurrentUser();

    const handleLogoutClick = () => {
        logoutUser()
        window.location.href = '/login'
    }

    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FONEAPI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Welcome</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/profile'>
                                {user.account}!
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={handleLogoutClick}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Header;