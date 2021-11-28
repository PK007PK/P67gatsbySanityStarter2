import React, { useContext } from 'react';
import { Link } from 'gatsby';

import AppContext from 'src/AppProvider';

import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import { Sling as Hamburger } from 'hamburger-react';
import MenuDropDown from 'src/components/MenuDropDown/MenuDropDown';

import Logo2 from 'src/components/Logo2/Logo2';
import Search from 'src/components/search';
import MenuItemsWrapper from '../MenuItemsWrapper/MenuItemsWrapper';
import { NavbarStyle } from './Navbar.style';

const searchIndices = [{ name: `Pages`, title: `Pages` }];

export default function Navbar({ location }) {
    const { toogleIsMenuActive, isMenuActive, diseableMenu } = useContext(AppContext);
    return (
        <NavbarStyle isMenuActive={isMenuActive}>
            <BootsContainer>
                <BootsRow>
                    <BootsColumn>
                        <div className="innerWrapper">
                            <Link
                                onClick={diseableMenu}
                                style={{ textDecoration: 'none' }}
                                className="logoWrapper"
                                to="/"
                            >
                                <Logo2 small />
                            </Link>

                            <div className="desktopLinksWrapper">
                                <MenuItemsWrapper onClick={diseableMenu} />
                                <Search indices={searchIndices} />
                            </div>
                            <div className="burgerWrapper">
                                <Hamburger toggled={isMenuActive} toggle={toogleIsMenuActive} />
                            </div>
                            {isMenuActive && <MenuDropDown />}
                        </div>
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </NavbarStyle>
    );
}
