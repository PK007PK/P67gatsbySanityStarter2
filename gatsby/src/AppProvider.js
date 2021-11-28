import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [isActive, setIsActive] = useState(false);
    const toogleIsActive = () => setIsActive((prevValue) => !prevValue);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toogleIsMenuActive = () => setIsMenuActive((prevValue) => !prevValue);
    const diseableMenu = () => setIsMenuActive(false);
    const [group, setGroup] = useState('gminy');

    return (
        <AppContext.Provider
            value={{
                isActive,
                toogleIsActive,
                isMenuActive,
                toogleIsMenuActive,
                diseableMenu,
                group,
                setGroup,
            }}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppContext.Provider>
    );
}

export default AppContext;
