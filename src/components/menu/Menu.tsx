import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
      <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`
