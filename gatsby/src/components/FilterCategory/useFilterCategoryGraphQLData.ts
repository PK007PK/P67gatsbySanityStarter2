import { useStaticQuery, graphql } from 'gatsby';

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
    name: string;
    slug: {
        current: string;
    };
}

export function useFilterCategoryGraphQLData(): Categories {
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

    const {nodes: categories } = data.allSanityBlogPostsCategories;
    return categories;
}