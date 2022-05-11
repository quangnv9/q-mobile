import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'reactstrap';
import productApi from '../../../../api/productApi';
import ProductBanner from '../../components/Banner/ProductBanner';
import Product from '../../components/Product/Product';
import Paginations from '../../components/ProductFilter/Pagination/Paginations';
import ProductFilters from '../../components/ProductFilter/ProductFilters';
import './styles.scss';

function ProductList(props) {
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(false);

    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 10,
    });

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const { data } = await productApi.getAll(filters);
                setProductList(data.data);
                setPagination(data.pagination);
                setLoading(false);
            } catch (error) {
                console.log('Failed to fetch api', error);
            }
        })();
    }, [filters]);

    const handleClickPage = (number) => {
        setFilters((prevFilter) => ({
            ...prevFilter,
            _page: number,
        }));
    };

    const handleFilterChange = (newFilters) => {
        setFilters((prevFilter) => ({
            ...prevFilter,
            _page: 1,
            ...newFilters,
        }));
    };

    return (
        <div>
            {loading ? (
                <Spinner color="info" className="loading">
                    Loading...
                </Spinner>
            ) : (
                <div>
                    <div className="banner">
                        <ProductBanner />
                    </div>
                    <div className="container">
                        <Row>
                            <Col lg={3} className="nav-bar">
                                <ProductFilters filters={filters} onChange={handleFilterChange} />
                            </Col>
                            <Col lg={9} className="content">
                                <div>
                                    <Row style={{ border: '1px solid #cccccc' }}>
                                        {productList.map((product) => (
                                            <Col key={product.id} lg={3}>
                                                <Product product={product} loading={loading} />
                                            </Col>
                                        ))}
                                    </Row>
                                    <Paginations pagination={pagination} onChange={handleClickPage} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductList;
