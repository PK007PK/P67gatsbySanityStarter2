import React from 'react';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import SectionHero from 'src/components/SectionHero/SectionHero';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { ArticleStyling } from 'src/components/ArticleStyling/ArticleStyling';
import SectionStatistics from '../components/SectionStatistics/SectionStatistics';
import SectionOurProjectsVertical from '../components/SectionOurProjectsVertical/SectionOurProjectsVertical';
import HeroTextBlock from '../components/HeroTextBlock/HeroTextBlock';
import Cooperation from '../components/Cooperation/Cooperation';

const ONasPage = ({ data }) => {
    const {
        title,
        tags: heroTags,
        description,
        _rawRichText,
        image: {
            asset: { gatsbyImageData },
        },
    } = data.sanityPageONas;

    return (
        <Layout>
            <SEO title="O nas" />
            <SectionHero
                leftComponent={() => <HeroTextBlock title={title} heroTags={heroTags} description={description} />}
            />
            <SEO title="Informacje o stowarzyszeniu" />
            <SectionStatistics />
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
                            <Cooperation />
                        </ArticleStyling>
                    </BootsColumn>
                    <BootsColumn style={{ marginTop: '50px' }} md={4}>
                        <SectionOurProjectsVertical />
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        sanityPageONas {
            title
            tags
            description
            image {
                asset {
                    gatsbyImageData(width: 400)
                }
            }
            _rawRichText
        }
    }
`;

export default ONasPage;
