import React from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';

export const MobileMenu: React.FC = () => {
  return (
    <S.MobileMenu>
      <S.BurgerButton aria-label="open menu" isOpen={false}>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={false}>
      <Menu/>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};


