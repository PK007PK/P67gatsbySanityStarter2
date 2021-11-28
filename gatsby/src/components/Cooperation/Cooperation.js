import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CooperationStyle } from './Cooperation.style';

const Cooperation = () => {
    const data = useStaticQuery(graphql`
        {
            allSanityCooperatingCities {
                nodes {
                    galleryItems {
                        title
                        projectImage {
                            asset {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);
    const { galleryItems } = data.allSanityCooperatingCities.nodes[0];
    return (
        <CooperationStyle>
            <h2>Nasi partnerzy:</h2>
            <div className="container">
                {galleryItems.map((item, i) => (
                    <div key={i} className="cardContainer">
                        <h4 className="cityName">{item.title}</h4>
                        <GatsbyImage
                            className="image"
                            image={item.projectImage.asset.gatsbyImageData}
                            placeholder="tracedSVG"
                            alt={item.title}
                            formats={['auto', 'webp']}
                            quality={100}
                        />
                    </div>
                ))}
            </div>
        </CooperationStyle>
    );
};

export default Cooperation;
