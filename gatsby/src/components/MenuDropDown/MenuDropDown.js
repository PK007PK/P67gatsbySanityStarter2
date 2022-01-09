import React, { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import AppContext from 'src/AppProvider';

import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { categoriesUsed } from '../../hooks/categoriesUsed';
import { tagsUsed } from '../../hooks/tagsUsed';
import { MenuDropDownStyles } from './MenuDropDown.styles';
import CardBlogEntry2 from '../CardBlogEntry2/CardBlogEntry2';
import Submenu from '../Submenu/Submenu';

const Menu = () => {
    const { toogleIsMenuActive, isMenuActive, diseableMenu } = useContext(AppContext);
    const data = useStaticQuery(graphql`
        query QueryMenuItems2 {
            sanityMenuData {
                menuItems {
                    pageSlug
                    pageName
                }
            }
            allSanityBlogPostsCategories(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    position
                    slug {
                        current
                    }
                }
            }
            allSanityBlogPostsTags(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    position
                    slug {
                        current
                    }
                }
            }
            allSanityBlogPosts(limit: 3, sort: { order: DESC, fields: date }) {
                nodes {
                    name
                    lead
                    date(formatString: "")
                    slug {
                        current
                    }
                    image {
                        asset {
                            gatsbyImageData(width: 400)
                        }
                    }
                }
            }
        }
    `);
    const menuData = data.sanityMenuData.menuItems;
    const categories = data.allSanityBlogPostsCategories.nodes;
    const tags = data.allSanityBlogPostsTags.nodes;
    const posts = data.allSanityBlogPosts.nodes;

    let menuWrapper = useRef(null);

    useEffect(() => {
        gsap.to(menuWrapper, { duration: 0.3, css: { display: 'block', top: 0 } });
    }, [isMenuActive]);

    return (
        <MenuDropDownStyles ref={(el) => (menuWrapper = el)}>
            <BootsContainer className="container">
                <nav>
                    <BootsRow className="submenuBar">
                        <BootsColumn sm={4}>
                            <Submenu onClick={diseableMenu} name="Sites" data={menuData} />
                        </BootsColumn>
                        <BootsColumn sm={4}>
                            <Submenu
                                checkObject={categoriesUsed()}
                                onClick={diseableMenu}
                                name="Categories"
                                data={categories}
                            />
                        </BootsColumn>
                        <BootsColumn sm={4}>
                            <Submenu checkObject={tagsUsed()} onClick={diseableMenu} name="Tags" data={tags} />
                        </BootsColumn>
                    </BootsRow>
                    <BootsRow className="latestArticlesTitleBar">
                        <BootsColumn sm={4}>
                            <h2 className="postsHeader">Latest articles:</h2>
                        </BootsColumn>
                    </BootsRow>
                    <BootsRow className="postsBar">
                        {posts.map((item, i) => (
                            <BootsColumn key={i} sm={4}>
                                <Link onClick={diseableMenu} to={`/${item.slug.current}`}>
                                    <CardBlogEntry2 small data={item} />
                                </Link>
                            </BootsColumn>
                        ))}
                    </BootsRow>
                </nav>
                <BootsRow />
            </BootsContainer>
            <div className="colorWrapper1" />
            <div className="colorWrapper2" />
        </MenuDropDownStyles>
    );
};

export default Menu;
