import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png'
import { Link, useLocation } from 'react-router-dom';
import './index.css';

const Navbar = () => {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} className="logo ms-4" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${(url === "/" ? " active" : "")}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${(url === "/how-to-register" ? " active" : "")}`} to="/how-to-register">How to Register?</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${(url === "/leaderboard" ? " active" : "")}`} to="/leaderboard">Leaderboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${(url === "/videos" ? " active" : "")}`} to="/videos">Videos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${(url === "/rewards" ? " active" : "")}`} to="/rewards">Rewards</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${(url === "/bonuses" ? " active" : "")}`} to="/bonuses">Bonuses</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
