import React from 'react';
import FilterByCategories from './FilterByCategories/FilterByCategories';

function ProductFilters({ filters, onChange }) {
    const handleFilterChange = (categoryId) => {
        if (!onChange) return;

        const newFilters = {
            ...filters,
            _page: 1,
            categoryId: categoryId,
        };
        onChange(newFilters);
    };
    return (
        <div>
            <FilterByCategories onChange={handleFilterChange} />
        </div>
    );
}

export default ProductFilters;
