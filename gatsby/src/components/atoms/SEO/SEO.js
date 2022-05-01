import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ children, location, title }) => {
    const data = useStaticQuery(graphql`
        {
            sanityWebsiteSettings {
                title
                description
                lang
                svgFavicon {
                    _rawAsset(resolveReferences: { maxDepth: 10 })
                }
                sitePreviev {
                    _rawAsset(resolveReferences: { maxDepth: 10 })
                }
                keywords
            }
        }
    `);

    const svgFavicon = data.sanitySiteSettings?.svgFavicon?._rawAsset?.metadata?.lqip;
    const sitePreview = data.sanitySiteSettings?.sitePreviev?._rawAsset?.url;

    return (
        <Helmet>
            <html lang={data.sanitySiteSettings?.lang || 'en'} />
            <title>{title || data.sanitySiteSettings?.title}</title>

            {/* Fav Icons */}
            <link rel="icon" href={svgFavicon || null} type="image/svg+xml" />

            {/* Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta name="description" content={data.sanitySiteSettings?.description || 'Default description'} />

            <meta name="keywords" content={data.sanitySiteSettings?.keywords || 'Default keywords'} />
            {/* Open Graph */}
            {location && <meta property="og:url" content={location.href} />}
            <meta property="og:image" content={sitePreview || null} />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta propery="og:site_name" content={data.sanitySiteSettings?.title} key="ogsitename" />
            <meta property="og:description" content={data.sanitySiteSettings?.description} key="ogdesc" />
            {children}
        </Helmet>
    );
};
export default SEO;
