import React from "react";
import {Link as ReachRouterLink} from "react-router-dom";
import {HeaderTag, Container, ButtonLink, Logo} from "./styles/header";

export const Header = ({children}) => {
    return <HeaderTag>{children}</HeaderTag>
}

Header.Frame = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = ({ to, ...restProps }) => {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    );
};

Header.ButtonLink = ({ children, ...restProps }) => {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};