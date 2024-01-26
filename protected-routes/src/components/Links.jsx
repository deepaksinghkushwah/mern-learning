import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Links = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        setAuth({});
        navigate("/",{replace: true});
    }
    return (
        <nav className="navbar navbar-expand-sm bg-info rounded mt-3 mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        {auth?.accessToken ? <li className="nav-item">
                            <Link to="#" onClick={(e) => handleLogout(e)} className="nav-link">Logout</Link>
                        </li> :
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        }
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">Admin</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/editor" className="nav-link">Editor</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Links