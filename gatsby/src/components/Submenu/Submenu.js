import React from 'react';
import { Link } from 'gatsby';
import { SubmenuStyle } from './Submenu.style';

const Submenu = ({ data, name, onClick, checkObject }) => {
    console.log(checkObject);
    return (
        <SubmenuStyle>
            <h2 className="submenuTitle">{name}</h2>
            <ul className="submenuList">
                {data.map((item, i) => {
                    if (!checkObject) {
                        return (
                            <li key={i} className="submenuItem">
                                <Link
                                    className="fx-txt-underline"
                                    to={item.pageSlug || `/${item.slug.current}/1#blog`}
                                    onClick={onClick}
                                >
                                    {item.pageName}
                                </Link>
                            </li>
                        );
                    }
                    if (checkObject[item.name] > 0) {
                        return (
                            <li key={i} className="submenuItem">
                                <Link
                                    className="fx-txt-underline"
                                    to={item.pageSlug || `/${item.slug.current}/1#blog`}
                                    onClick={onClick}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
        </SubmenuStyle>
    );
};

export default Submenu;
