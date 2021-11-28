import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { MenuItemsWrapperStyles } from './MenuItemsWrapper.style';

const MenuItemsWrapper = ({ styles, className, onClick }) => {
    const data = useStaticQuery(graphql`
        query QueryMenuItems {
            sanityMenuData {
                menuItems {
                    pageSlug
                    pageName
                }
            }
        }
    `);
    const menuData = data?.sanityMenuData?.menuItems;
    return (
        <>
            <MenuItemsWrapperStyles styles={styles} className={className}>
                {menuData.map((item, i) => (
                    <li key={i}>
                        <Link
                            className="fx-txt-underline"
                            onClick={onClick}
                            activeClassName="active"
                            activeStyle={{ color: 'var(--colorActiveSecondary)' }}
                            to={item.pageSlug}
                        >
                            {item.pageName}
                        </Link>
                    </li>
                ))}
            </MenuItemsWrapperStyles>
        </>
    );
};

export default MenuItemsWrapper;
