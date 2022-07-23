import React from 'react';
import { HeaderContainer, FeatureContainer, JumbotronContainer, FaqsContainer, FooterContainer } from "../containers";
import favicon from "../assets/images/favicon.ico";
import {Helmet} from "react-helmet";

export const Home = () => {
    return (
        <>
            <Helmet>
                <link rel="icon" href={favicon}/>
                <title>Netflix</title>
            </Helmet>
            <HeaderContainer />
            <FeatureContainer />
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}
