import { Link } from 'gatsby';
import React from 'react';
import CardBlogEntry2 from '../CardBlogEntry2/CardBlogEntry2';
import { PostsToDisplayStyles } from './PostsToDisplay.style';

const PostsToDisplay = ({ data }) => (
    <PostsToDisplayStyles>
        {data
            .filter((item) => item.date !== null)
            .map((item) => (
                <Link key={item.slug.current} to={`/${item.slug.current}`}>
                    <CardBlogEntry2 data={item} />
                </Link>
            ))}
    </PostsToDisplayStyles>
);

export default PostsToDisplay;
