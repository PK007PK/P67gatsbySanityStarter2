import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FilterCategoryStyle } from './FilterCategory.style';
import pathCheck from '../../utils/pathCheck';

export default function FilterCategory({ location }) {
    const data = useStaticQuery(graphql`
        {
            allSanityBlogPostsCategories(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const categories = data.allSanityBlogPostsCategories.nodes;

    return (
        <FilterCategoryStyle>
            <Link to="/1#blog" style={pathCheck(location) ? { color: '#00BFA5' } : null}>
                <h2 className="title">Aktualności</h2>
            </Link>
            <div className="links">
                {categories.map((category) => (
                    <Link
                        to={`/${category.slug.current}/1#blog`}
                        style={pathCheck(location, category.slug.current) ? { color: '#00BFA5' } : null}
                        key={category.slug.current}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </FilterCategoryStyle>
    );
}
