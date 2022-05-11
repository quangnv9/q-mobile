import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, NavLink, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'reactstrap';
import './styles.scss';

function ProductBanner() {
    const [canvas, setCanvas] = useState(false);

    const handleToggle = () => {
        setCanvas(!canvas);
    };
    return (
        <div className="container">
            <Row>
                <Col lg={4} className="banner-item">
                    <i className="fa fa-rocket" aria-hidden="true"></i>
                    <p>Free shipping</p>
                </Col>
                <Col lg={4} className="banner-item center">
                    <i className="fa fa-money" aria-hidden="true"></i>
                    <p>Friendly prices</p>
                </Col>
                <Col lg={4} className="banner-item">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <p>Always on time</p>
                </Col>
            </Row>
        </div>
    );
}

export default ProductBanner;
