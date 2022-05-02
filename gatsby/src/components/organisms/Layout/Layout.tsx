import Footer from 'components/Footer/Footer';
import Navbar from 'components/organisms/Navbar/Navbar';
import React from 'react';
import CustomStyles from 'styles/CustomStyles';
import GlobalStyles from 'styles/GlobalStyles';
import Typography from 'styles/Typography';


const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <Typography />
        <CustomStyles />
        <Navbar />
        {children}
        <Footer />
    </>
);

export default Layout;
