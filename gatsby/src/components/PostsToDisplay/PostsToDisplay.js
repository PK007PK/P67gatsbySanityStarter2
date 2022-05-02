import React from 'react';
import { Link } from 'gatsby';

import { CardBlogEntry } from 'components/molecules/CardBlogEntry/CardBlogEntry';
import { PostsToDisplayStyles } from './PostsToDisplay.style';

const PostsToDisplay = ({ data }) => (
    <PostsToDisplayStyles>
        {data
            .filter((item) => item.date !== null)
            .map((item) => (
                <Link key={item.slug.current} to={`/${item.slug.current}`}>
                    <CardBlogEntry data={item} />
                </Link>
            ))}
    </PostsToDisplayStyles>
);

export default PostsToDisplay;
