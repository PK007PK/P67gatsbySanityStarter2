import React from 'react';
import { Layout } from 'src/components/organisms/Layout/Layout';
import SEO from 'src/components/atoms/SEO/SEO.tsx';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/atoms/BootsElements/BootsElements.ts';
import SectionHero from 'src/components/SectionHero/SectionHero';
import { graphql } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';
import { FormContact } from 'components/molecules/FormContact/FormContact';
import { HeroTextBlock } from 'components/atoms/HeroTextBlock/HeroTextBlock';

const PolitykaPage = ({ data }) => {
    const {
        title,
        tags: heroTags,
        description,
        image: {
            asset: { gatsbyImageData },
        },
        _rawRichText,
    } = data.sanityPagePolicy;

    return (
        <Layout>
            <SEO title="Kontakt" />
            <SectionHero
                leftComponent={() => <HeroTextBlock title={title} heroTags={heroTags} description={description} />}
            />
            <BootsContainer>
                <BootsRow between style={{ margin: '50px 0 50px' }}>
                    <BootsColumn md={6}>
                        <BlockContent
                            blocks={_rawRichText}
                            dataset="production"
                            url=""
                            projectId={process.env.SANITY_PROJECT_ID}
                        />
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
        sanityPagePolicy {
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

export default PolitykaPage;
