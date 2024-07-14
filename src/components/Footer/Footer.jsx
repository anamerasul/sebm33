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
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Link className="navbar-brand" to="/"><img src={logo} className="logo" /></Link>
                        <p>Copyright @ 2024 sebm1337.com</p>
                    </div>
                    <div className="col-md">
                        <p>Disclaimer</p>
                        <p>We do not take any responsibility for any losses from gambling in casinos and betting sites which are linked or promoted on our website(s). As a player, you are responsible for your bets.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Navbar;
