import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { MenuItemsListStyle } from './MenuItemsList.style';
import { CommonProps } from 'types/commonProps';
import { SanityQuery } from 'types/sanityQuery';

export const MenuItemsList = ({ style, className, onClick }: CommonProps) => {

    const data: SanityQuery = useStaticQuery(graphql`
        query QueryMenuItems {
            sanityMenuData {
                menuItems {
                    pageSlug
                    pageName
                }
            }
        }
    `);

    const menuData = data.sanityMenuData.menuItems;

    return (
        <MenuItemsListStyle style={style} className={className}>
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
        </MenuItemsListStyle>
    );
};
