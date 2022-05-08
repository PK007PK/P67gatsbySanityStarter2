import React, { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { AppContext } from 'src/AppProvider';

import { BootsContainer, BootsRow, BootsColumn } from 'components/atoms/BootsElements/BootsElements';
import { Link } from 'gatsby';

import { CardBlogEntry } from 'components/molecules/CardBlogEntry/CardBlogEntry';
import { categoriesUsed } from '../../hooks/categoriesUsed';
import { tagsUsed } from '../../hooks/tagsUsed';
import { MenuDropDownStyles } from './MenuDropDown.styles';

import Submenu from '../Submenu/Submenu';
import { useMenuDropDownGraphQLData } from './useMenuDropDownGraphQLData';
import { menuDropDownTexts } from './MenuDropDown.texts';
import { languageCheck } from 'hooks/languageCheck';

export const MenuDropDown: React.FunctionComponent = () => {

    const { isMenuActive, diseableMenu } = useContext(AppContext);
    const {
        menuData,
        categories,
        tags,
        posts,
    } = useMenuDropDownGraphQLData();
    let menuWrapper = useRef(null);
    const lang = languageCheck();

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
                            <h2 className="postsHeader">{menuDropDownTexts.title[lang]}</h2>
                        </BootsColumn>
                    </BootsRow>
                    <BootsRow className="postsBar">
                        {posts.map((item, i) => (
                            <BootsColumn key={i} sm={4}>
                                <Link onClick={diseableMenu} to={`/${item.slug.current}`}>
                                    <CardBlogEntry small data={item} />
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
