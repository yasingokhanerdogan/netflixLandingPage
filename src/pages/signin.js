import React from 'react';
import {SignInContainer, FooterContainer, HeaderContainer} from '../containers';
import favicon from "../assets/images/favicon.ico";
import {Helmet} from "react-helmet";

export const SignIn = () => {
    return (
        <>
            <Helmet>
                <link rel="icon" href={favicon}/>
                <title>Sign In | Netflix</title>
            </Helmet>
            <HeaderContainer/>
            <SignInContainer/>
            <FooterContainer/>
        </>
    )
        ;
}
