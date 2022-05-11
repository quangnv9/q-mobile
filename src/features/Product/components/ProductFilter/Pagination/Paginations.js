import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './styles.scss';

function Paginations({ pagination, onChange }) {
    const { _limit, _totalRows } = pagination;
    const numbers = [];
    const pageNumber = Math.ceil(_totalRows / _limit);

    for (let i = 1; i <= pageNumber; i++) {
        numbers.push(i);
    }

    const handleClickPage = (number) => {
        if (!onChange) return;
        onChange(number);
    };

    return (
        <Pagination className="pagination">
            {numbers.map((number) => {
                return (
                    <PaginationItem key={number}>
                        <PaginationLink onClick={() => handleClickPage(number)}>{number}</PaginationLink>
                    </PaginationItem>
                );
            })}
        </Pagination>
    );
}

export default Paginations;
