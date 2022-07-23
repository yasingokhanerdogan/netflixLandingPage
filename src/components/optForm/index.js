import React from 'react';
import { Container, Input, Break, Button, Text } from './styles/optForm';

import chevronRight from "../../assets/images/icons/chevron-right.png";

export const OptForm = ({ children }) => {
  return <>{children}</>
}

OptForm.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Input = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

OptForm.Button = ({ children, ...restProps }) => {
  return (
      <Button {...restProps}>
        {children} <img src={chevronRight} alt="Try Now" />
      </Button>
  );
};

OptForm.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = ({ ...restProps }) => {
  return <Break {...restProps} />;
};
