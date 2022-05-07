import { useStaticQuery, graphql } from 'gatsby';
import { SanityQuery } from 'types/sanityQuery';

interface GraphQlData {
    allSanityBlogPostsCategories: {
        nodes: {
            name: string,
            slug: {
                current: string,
            }
        }
    }
}

interface Categories {
    nodes: {
        name: string,
        slug: {
            current: string,
        }
    }
}

export function filterCategoryGraphQLHook(): Categories {
    const data: GraphQlData = useStaticQuery(graphql`
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

    const categories = data.allSanityBlogPostsCategories;
    return categories;
}