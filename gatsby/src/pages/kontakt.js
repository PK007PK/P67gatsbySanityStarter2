import React from 'react';

import SEO from 'src/components/atoms/SEO/SEO.tsx';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/atoms/BootsElements/BootsElements.ts';
import SectionHero from 'src/components/SectionHero/SectionHero';
import { graphql } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';

import { Layout } from 'components/organisms/Layout/Layout';
import { ArticleStyling } from 'components/atoms/ArticleStyling/ArticleStyling';
import { FormContact } from 'components/molecules/FormContact/FormContact';
import HeroTextBlock from '../components/HeroTextBlock/HeroTextBlock';

const KontaktPage = ({ data }) => {
    const {
        title,
        tags: heroTags,
        description,
        image: {
            asset: { gatsbyImageData },
        },
        _rawRichText,
    } = data.sanityPageKontakt;

    return (
        <Layout>
            <SEO title="Kontakt" />
            <SectionHero
                leftComponent={() => <HeroTextBlock title={title} heroTags={heroTags} description={description} />}
            />
            <BootsContainer>
                <BootsRow between style={{ margin: '50px 0 50px' }}>
                    <BootsColumn md={6}>
                        <ArticleStyling className="blog-post">
                            <BlockContent
                                blocks={_rawRichText}
                                dataset="production"
                                url=""
                                projectId={process.env.SANITY_PROJECT_ID}
                            />
                        </ArticleStyling>
                    </BootsColumn>
                    <BootsColumn md={5}>
                        <FormContact />
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        sanityPageKontakt {
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

export default KontaktPage;
