import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FilterTagsStyle } from './FilterTags.style';
import pathCheck from '../../utils/pathCheck';

export default function FilterTags({ location }) {
    const data = useStaticQuery(graphql`
        query {
            allSanityBlogPostsTags(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const tags = data.allSanityBlogPostsTags.nodes;
    return (
        <FilterTagsStyle>
            {tags.map((tag) => (
                <Link
                    to={`/${tag.slug.current}/1#blog`}
                    style={pathCheck(location, tag.slug.current) ? { color: '#00BFA5' } : null}
                    key={tag.slug.current}
                >
                    {tag.name}
                </Link>
            ))}
        </FilterTagsStyle>
    );
}
