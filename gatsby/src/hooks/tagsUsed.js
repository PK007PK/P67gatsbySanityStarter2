import { useStaticQuery, graphql } from 'gatsby';

export function tagsUsed() {
    const data = useStaticQuery(graphql`
        {
            allSanityBlogPosts {
                nodes {
                    tags {
                        name
                    }
                }
            }
        }
    `);

    const allPostsTags = [];
    data.allSanityBlogPosts.nodes.forEach((post) => {
        post.tags.forEach((item) => allPostsTags.push(item.name));
    });
    const tagsCounts = {};
    allPostsTags.forEach((x) => {
        tagsCounts[x] = (tagsCounts[x] || 0) + 1;
    });
    return tagsCounts;
}
