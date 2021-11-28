import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CardSimpleStyles } from './CardSimple.styles.js';

const CardSimple = ({ data, className }) => {
    const query = useStaticQuery(graphql`
        {
            sanitySiteTechConfig {
                blankImgPLaceholder {
                    asset {
                        gatsbyImageData
                    }
                }
            }
        }
    `);
    const {
        sanitySiteTechConfig: {
            blankImgPLaceholder: {
                asset: { gatsbyImageData: placeholder },
            },
        },
    } = query;
    const { projectName: title, projectImage, color, backgroundColor } = data;
    const imgSource = projectImage?.asset?.gatsbyImageData;
    return (
        <CardSimpleStyles color={color} backgroundColor={backgroundColor} className={className}>
            <div className="textBlock">
                <h3 className="title">{title}</h3>
            </div>
        </CardSimpleStyles>
    );
};

export default CardSimple;
