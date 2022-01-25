import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import Logo from 'src/components/atoms/Logo/Logo';
import { SectionBlogPostHeroStyle } from './SectionBlogPostHero.style';

const SectionBlogPostHero = ({ leftComponent, data }) => {
    const LeftComponent = leftComponent;
    return (
        <BootsContainer>
            <SectionBlogPostHeroStyle>
                <BootsRow between style={{ marginTop: '50px' }}>
                    <BootsColumn md={6} className="leftSide">
                        <LeftComponent />
                    </BootsColumn>
                    <BootsColumn md={6}>
                        <div className="imgWrapper">
                            {data ? (
                                <GatsbyImage
                                    className="pict"
                                    image={data}
                                    formats={['auto', 'webp']}
                                    quality={100}
                                    height={500}
                                    alt=""
                                />
                            ) : (
                                <Logo />
                            )}
                        </div>
                    </BootsColumn>
                </BootsRow>
            </SectionBlogPostHeroStyle>
        </BootsContainer>
    );
};

export default SectionBlogPostHero;
