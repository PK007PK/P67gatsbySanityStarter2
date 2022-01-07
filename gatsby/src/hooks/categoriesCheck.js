import { useStaticQuery, graphql } from 'gatsby';

export function categoriesCheck() {
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
    const allPosts = data.allSanityBlogPosts.nodes;
    allPosts.forEach((post) => {
        post.categories.forEach((item) => allPostsCategories.push(item.name));
    });
    const counts = {};
    allPostsCategories.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
}
