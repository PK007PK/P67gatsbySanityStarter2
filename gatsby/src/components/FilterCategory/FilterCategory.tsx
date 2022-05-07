import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { categoriesUsed } from '../../hooks/categoriesUsed';
import { FilterCategoryStyle } from './FilterCategory.style';
import pathCheck from '../../utils/pathCheck';
import { useFilterCategoryGraphQLData } from './useFilterCategoryGraphQLData';

export const FilterCategory = ({ location }) => {
    const counts = categoriesUsed();
    const categories = useFilterCategoryGraphQLData();

    return (
        <FilterCategoryStyle>
            <Link to="/1#blog" style={pathCheck(location) ? { color: '#00BFA5' } : null}>
                <h2 className="title">Latest articles</h2>
            </Link>
            <div className="links">
                {categories.map((category) => {
                    if (counts[category.name] > 0) {
                        return (
                            <Link
                                to={`/${category.slug.current}/1#blog`}
                                style={pathCheck(location, category.slug.current) ? { color: '#00BFA5' } : null}
                                key={category.slug.current}
                            >
                                {category.name} ({counts[category.name]})
                            </Link>
                        );
                    }
                })}
            </div>
        </FilterCategoryStyle>
    );
}
