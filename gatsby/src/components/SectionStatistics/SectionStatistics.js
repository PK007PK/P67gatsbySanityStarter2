import React, { useState } from 'react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SectionStatisticsStyle } from './SectionStatistics.style';
import GalleryCarousel from '../GalleryCarousel/GalleryCarousel';
import Statistics from '../Statistics/Statistics';

const SectionStatistics = () => {
    const data = useStaticQuery(graphql`
        {
            sanityPageHome {
                statisticsBackground {
                    asset {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    const {
        sanityPageHome: {
            statisticsBackground: {
                asset: { gatsbyImageData },
            },
        },
    } = data;

    const [selected, setSelected] = useState('stats');

    return (
        <SectionStatisticsStyle>
            {/* <GatsbyImage
                className="backgroundImage"
                image={gatsbyImageData}
                placeholder="blurred"
                alt=""
                formats={['auto', 'webp']}
                quality={50}
            /> */}
            <BootsContainer>
                <div className="titleBar">
                    <h2 className="title">Stowarzyszenie EkoMonterzy</h2>
                    <button
                        onClick={() => setSelected('stats')}
                        style={selected === 'stats' ? { color: `var(--colorActiveSecondary)` } : null}
                        className="btn"
                        type="button"
                    >
                        Statystyki
                    </button>
                    <button
                        onClick={() => setSelected('gallery')}
                        style={selected === 'gallery' ? { color: `var(--colorActiveSecondary)` } : null}
                        className="btn"
                        type="button"
                    >
                        Galeria
                    </button>
                    <button
                        onClick={() => setSelected('testimonial')}
                        style={selected === 'testimonial' ? { color: `var(--colorActiveSecondary)` } : null}
                        className="btn"
                        type="button"
                    >
                        Referencje
                    </button>
                </div>
            </BootsContainer>
            {selected === 'stats' && <Statistics />}
            {selected === 'testimonial' && <GalleryCarousel testimonials />}
            {selected === 'gallery' && <GalleryCarousel gallery />}
        </SectionStatisticsStyle>
    );
};

export default SectionStatistics;
