import React from 'react';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/atoms/SEO/SEO';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import SectionHero from 'src/components/SectionHero/SectionHero';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { ArticleStyling } from 'src/components/ArticleStyling/ArticleStyling';

import HeroTextBlock from '../components/HeroTextBlock/HeroTextBlock';

const About = ({ data }) => {
    console.log(data);
    const {
        title,
        description,
        _rawRichText,
        // image: {
        //     asset: { gatsbyImageData },
        // },
    } = data.sanityPageAbout;
    return (
        <Layout>
            <SEO title="O nas" />
            <SectionHero leftComponent={() => <HeroTextBlock title={title} description={description} />} />
            <SEO title="Informacje o stowarzyszeniu" />
            <BootsContainer>
                <BootsRow between>
                    <BootsColumn style={{ marginTop: '50px' }} md={7}>
                        <ArticleStyling>
                            <BlockContent
                                blocks={_rawRichText}
                                dataset="production"
                                url=""
                                projectId={process.env.SANITY_PROJECT_ID}
                            />
                        </ArticleStyling>
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        sanityPageAbout {
            title
            description
            # image {
            #     asset {
            #         gatsbyImageData(width: 400)
            #     }
            # }
            _rawRichText
        }
    }
`;

export default About;
