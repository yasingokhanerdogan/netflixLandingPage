import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import {Body, Container, Frame, Header, Inner, Item, Title} from './styles/accordion';

import closedArrow from "../../assets/images/icons/close-slim.png";
import openArrow from "../../assets/images/icons/add.png";

const ToggleContext = createContext();

export const Accordion = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Accordion.Title = ({children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = ({children, ...restProps}) => {
    return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = ({children, ...restProps}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleShow, setToggleShow] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks

    // const itemRef = useRef();
    //
    // const handleOutClick = (event) => {
    //     if (!itemRef.current.contains(event.target))
    //         setToggleShow(false);
    // }
    //
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
    //     document.addEventListener("click", handleOutClick);
    // }, []);

    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps} /*ref={itemRef}*/>{children}</Item>
        </ToggleContext.Provider>
    );
};

Accordion.Header = ({children, ...restProps}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {toggleShow, setToggleShow} = useContext(ToggleContext);

    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <img src={closedArrow} alt="Close"/>
            ) : (
                <img src={openArrow} alt="Open"/>
            )}
        </Header>
    );
};

Accordion.Body = ({children, ...restProps}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {toggleShow} = useContext(ToggleContext);

    return (
        <Body className={!toggleShow && 'closed'} {...restProps}>
            <span>{children}</span>
        </Body>
    );
};
