import React from 'react'
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';

import Close from '@icons/icon_close.png';

const ProductDetail = () => {
    return (
        <aside className="nav-ProductDetail">
            <div className="ProductDetail-close">
                <img src={Close} alt="close" />
            </div>
            <ProductInfo />
        </aside>
    );
}

export default ProductDetail;