import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { pathCheck } from 'utils/pathCheck';
import { tagsUsed } from '../../hooks/tagsUsed';
import { FilterTagsStyle } from './FilterTags.style';

export default function FilterTags({ location }) {
    const counts = tagsUsed();
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
            allSanityBlogPosts {
                nodes {
                    tags {
                        name
                    }
                }
            }
        }
    `);

    const tags = data.allSanityBlogPostsTags.nodes;
    return (
        <FilterTagsStyle>
            {tags.map((tag) => {
                if (counts[tag.name] > 0) {
                    return (
                        <Link
                            to={`/${tag.slug.current}/1#blog`}
                            style={pathCheck(location, tag.slug.current) ? { color: '#00BFA5' } : null}
                            key={tag.slug.current}
                        >
                            {tag.name} ({counts[tag.name]})
                        </Link>
                    );
                }
            })}
        </FilterTagsStyle>
    );
}
