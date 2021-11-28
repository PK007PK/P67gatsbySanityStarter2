import { Link } from 'gatsby';
import React from 'react';
import { PaginationPlaceholderStyle } from './PaginationPlaceholder.style';

export default function PaginationPlaceholder() {
    // make some variables
    const currentPage = 1;
    const totalPages = 12;
    const prevPage = 1 - 1;
    const nextPage = 1 + 1;
    return (
        <PaginationPlaceholderStyle>
            {Array.from({ length: 3 }).map((_, i) => (
                <Link
                    className={currentPage === 1 && i === 0 ? 'current' : ''}
                    to={`${i >= 0 ? i + 1 : ''}#blog`}
                    key={`page${i}`}
                >
                    {i + 1}
                </Link>
            ))}
        </PaginationPlaceholderStyle>
    );
}
