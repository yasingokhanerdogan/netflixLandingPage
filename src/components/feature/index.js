import React from 'react';
import {Container, Title, SubTitle, Inner} from './styles/feature';

export const Feature = ({ children }) => {
  return <>{children}</>
}

Feature.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Feature.Inner = ({ children, ...restProps }) => {
  return <Inner {...restProps}>{children}</Inner>;
};

Feature.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
