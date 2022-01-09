import { useStaticQuery, graphql } from 'gatsby';

export function categoriesUsed() {
    const data = useStaticQuery(graphql`
        {
            allSanityBlogPosts {
                nodes {
                    categories {
                        name
                    }
                }
            }
        }
    `);

    const allPostsCategories = [];
    data.allSanityBlogPosts.nodes.forEach((post) => {
        post.categories.forEach((item) => allPostsCategories.push(item.name));
    });
    const categoriesCounts = {};
    allPostsCategories.forEach((x) => {
        categoriesCounts[x] = (categoriesCounts[x] || 0) + 1;
    });
    return categoriesCounts;
}
