import styled, {css} from 'styled-components';
import {theme } from "../../../styles/Theme";


//Menu
const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${theme.media.mobile} {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
`
const MenuItem = styled.li`

`

const Link = styled.a`
  font-size: 20px;
  padding: 20px;

  @media ${theme.media.mobile} {
    font-size: 36px;
  }

`

//MobileMenu
const MobileMenu = styled.nav`

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
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: absolute;
  width: 45px;
  height: 45px;
  top: 25px;
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

//Desktop
const DesktopMenu = styled.nav`

`

export const S = {
  DesktopMenu,
  MenuList,
  MenuItem,
  Link,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton
}
