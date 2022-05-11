import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import './styles.scss';

function Header(props) {
    const toggle = useRef(null);
    const [canvas, setCanvas] = useState(false);

    const handleToggleMenu = () => {
        setCanvas(!canvas);
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
                        <Link to="/blog">Blog</Link>
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
                <div className="nav-bars" onClick={handleToggleMenu}>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
            <div>
                <Offcanvas direction="top" isOpen={canvas}>
                    <OffcanvasHeader className="offcanvas-header" toggle={handleToggleMenu}>
                        Menu
                    </OffcanvasHeader>
                    <OffcanvasBody className="offcanvas-body">
                        <ul>
                            <li>
                                <Link to="/" onClick={handleToggleMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={handleToggleMenu}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" onClick={handleToggleMenu}>
                                    BLog
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" onClick={handleToggleMenu}>
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </div>
    );
}

export default Header;
