import React, { useEffect, useState } from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import categoryApi from '../../../../../api/categoryApi';
import './styles.scss';

function FilterByCategories({ onChange }) {
    const [categories, setCategories] = useState([]);
    const [canvas, setCanvas] = useState(false);

    const handleToggleMenu = () => {
        setCanvas(!canvas);
    };

    const handleFilterChange = (categoryId) => {
        if (!onChange) return;
        onChange(categoryId.id);
    };

    useEffect(() => {
        (async () => {
            try {
                const { data } = await categoryApi.getAll();
                setCategories(data);
            } catch (error) {
                console.log('Failed to fetch API category', error);
            }
        })();
    }, []);

    return (
        <div>
            <div className="categories">
                <ul>
                    {categories.map((category) => (
                        <li key={category.id} onClick={() => handleFilterChange(category)}>
                            {category.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="categories-mb">
                <div className="nav-bars" onClick={handleToggleMenu}>
                    <i className="fa fa-bars"></i>
                </div>
                <Offcanvas className="offcanvas" autoFocus={true} direction="top" isOpen={canvas}>
                    <OffcanvasHeader className="offcanvas-header" toggle={handleToggleMenu}>
                        Categories
                    </OffcanvasHeader>
                    <OffcanvasBody className="offcanvas-body">
                        <ul className="">
                            {categories.map((category) => (
                                <li key={category.id} onClick={() => handleFilterChange(category)}>
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </div>
    );
}

export default FilterByCategories;
