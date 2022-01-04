import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { CardProductStyles } from './CardProduct.styles.js';

const CardProduct = ({ data, className, small }) => {
    const query = useStaticQuery(graphql`
        {
            sanityBlogConfig {
                blankImgPLaceholder {
                    asset {
                        gatsbyImageData
                    }
                }
            }
        }
    `);
    const {
        sanityBlogConfig: {
            blankImgPLaceholder: {
                asset: { gatsbyImageData: placeholder },
            },
        },
    } = query;
    const { pageSlug, projectName: title, projectImage, color, backgroundColor, projectSubtitle } = data;
    const imgSource = projectImage?.asset?.gatsbyImageData;
    return (
        <CardProductStyles small={small} color={color} backgroundColor={backgroundColor} className={className}>
            <GatsbyImage
                className="image"
                image={imgSource || placeholder}
                placeholder="blurred"
                alt={title}
                formats={['auto', 'webp']}
                quality={50}
                style={small ? null : { cursor: 'grab' }}
            />
            <Link to={pageSlug ? `/${pageSlug}` : '/'}>
                <div className="textBlock">
                    <h3 className="title">{title}</h3>
                    <p className="subTitle">{projectSubtitle}</p>
                </div>
            </Link>
        </CardProductStyles>
    );
};

export default CardProduct;
