import $ from 'jquery';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Header(props) {
    const toggle = useRef(null);

    const handleToggle = () => {
        $(toggle.current).slideToggle();
    };

    return (
        <div className="container">
            <div className="header">
                <div className="logo">Q-Mobile</div>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="nav-cart nav-item">
                        <i className="fa fa-shopping-cart"></i>
                        <a href="/#">
                            Cart <span>0</span>
                        </a>
                    </li>
                </ul>
                <div className="nav-bars" onClick={handleToggle}>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
            <ul ref={toggle} className="nav-list-mb">
                <li className="nav-item-mb">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item-mb">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item-mb">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="nav-item-mb">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
