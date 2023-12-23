import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Logo = () => {
  return (
    <LogoLink aria-label="logo vebsite" href={"index.html"}>
      <Icon role="img" iconId = {"logo"} width={"185"} height={"48"} viewBox={"0 0 185 48"} />
    </LogoLink>
  );
};

const LogoLink = styled.a`
  color: ${theme.colors.font};

  &:hover {
    color: ${theme.colors.accent};
  }
`
