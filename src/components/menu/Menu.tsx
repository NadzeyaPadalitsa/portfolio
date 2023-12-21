import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <MenuItem>
          <Link href="#hero">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#skills">Skills</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#projects">Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#contacts">Contacts</Link>
        </MenuItem>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`
const MenuItem = styled.li`

`

const Link = styled.a`
  font-size: 20px;
  padding: 20px;
`
