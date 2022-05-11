import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';

ProductFeature.propTypes = {};

function ProductFeature(props) {
    return (
        <div>
            <Routes>
                <Route path="*" element={<ProductList />} />
            </Routes>
        </div>
    );
}

export default ProductFeature;
