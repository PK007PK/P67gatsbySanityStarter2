import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { GalleryItemStyle } from './GalleryItem.style';

const GalleryItem = ({ data, testimonials }) => {
    const {
        title,
        projectImage: {
            asset: { gatsbyImageData },
        },
    } = data;

    return (
        <GalleryItemStyle testimonials={testimonials}>
            <GatsbyImage
                className="imageThumb"
                image={gatsbyImageData}
                placeholder="blurred"
                alt={title}
                formats={['auto', 'webp']}
                quality={70}
            />
        </GalleryItemStyle>
    );
};

export default GalleryItem;
