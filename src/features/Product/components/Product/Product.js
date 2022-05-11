import React from 'react';
import { formatPrice } from '../../../../utils/common';
import './styles.scss';

function Product({ product = null, loading }) {
    return (
        <div className="product-item">
            <img src={product.thumbnailUrl} alt={product.name} />
            <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">
                    {formatPrice(product.price)}
                    {product.promotionPrice > 0 ? '' : <span>{` -${product.promotionPercent}%`}</span>}
                </p>
            </div>
        </div>
    );
}

export default Product;
