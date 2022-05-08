import React from 'react';
import { categoriesUsed } from '../../hooks/categoriesUsed';
import { FilterCategoryStyle } from './FilterCategory.style';
import { filterCategoryTexts } from './FilterCategory.texts'
import { languageCheck } from 'hooks/languageCheck'
import pathCheck from '../../utils/pathCheck';
import { useFilterCategoryGraphQLData } from './useFilterCategoryGraphQLData';
import { Link } from 'gatsby';

interface Props {
    location: string,
}

export const FilterCategory: React.FunctionComponent<Props> = ({ location }) => {
    const counts = categoriesUsed();
    const categories = useFilterCategoryGraphQLData();
    const lang = languageCheck();

    return (
        <FilterCategoryStyle>
            <Link to="/1#blog" style={pathCheck(location) ? { color: '#00BFA5' } : null}>
                <h2 className="title">{filterCategoryTexts.info[lang]}</h2>
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
