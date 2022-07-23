import React from "react";
import {useLocation} from "react-router-dom";
import * as ROUTES from "../constants/routes";
import {Header} from "../components";

import logo from "../assets/images/logo.svg";

export const HeaderContainer = () => {
    const location = useLocation();

    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                {location.pathname !== ROUTES.SIGN_IN ? <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> : ""}
            </Header.Frame>
        </Header>
    )
}