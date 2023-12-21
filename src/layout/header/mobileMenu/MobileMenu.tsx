import React from 'react';
import styled, {css} from 'styled-components';
import { theme } from '../../../styles/Theme';
import { VisuallyHidden } from '../../../components/VisuallyHidden';

export const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <VisuallyHidden>Open menu</VisuallyHidden>
      </BurgerButton>
      <MobileMenuPopup isOpen={false}>
      <ul>
        <MenuItem>
          <Link href="#main">Home</Link>
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
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99999;
  background-color: ${theme.colors.primaryBg};
  display: none;

  ${props => props.isOpen && css <{isOpen: boolean}> `
    display: flex;
    justify-content: center;
    align-items: center;
  `}

    ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: absolute;
  width: 45px;
  height: 45px;
  top: 40px;
  right: 20px;
  background-color: ${theme.colors.primaryBg};
  z-index: 9999999;
  border: none;
  cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      box-shadow: 0 8px 0 0 ${theme.colors.font}, 0 16px 0 0 ${theme.colors.font};

      ${props => props.isOpen && css <{isOpen: boolean}> `
        transform: rotate(45deg);
        box-shadow: none;
      `}
    }

      &::after {
        ${props => props.isOpen && css <{isOpen: boolean}> `
          transform: rotate(-45deg);
        `}
      }
`

const MenuItem = styled.li`

`

const Link = styled.a`
  font-size: 36px;
  padding: 20px;
`
