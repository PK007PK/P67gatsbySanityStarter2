
import React from 'react';
import { Footer } from 'components/atoms/Footer/Footer';
import { Navbar } from 'components/organisms/Navbar/Navbar';
import CustomStyles from 'styles/CustomStyles';
import GlobalStyles from 'styles/GlobalStyles';
import Typography from 'styles/Typography';


export const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <Typography />
        <CustomStyles />
        <Navbar />
        {children}
        <Footer />
    </>
);

