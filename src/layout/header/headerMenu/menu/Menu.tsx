import React from 'react';
import { S } from '../HeaderMenu_Styles';

export const Menu: React.FC = () => {
  return (
    <S.MenuList>
      <S.MenuItem>
        <S.Link  href="#main">Home</S.Link>
      </S.MenuItem>
      <S.MenuItem>
        <S.Link href="#about">About</S.Link>
      </S.MenuItem>
      <S.MenuItem>
        <S.Link href="#skills">Skills</S.Link>
      </S.MenuItem>
      <S.MenuItem>
        <S.Link href="#projects">Projects</S.Link>
      </S.MenuItem>
      <S.MenuItem>
        <S.Link href="#contacts">Contacts</S.Link>
      </S.MenuItem>
    </S.MenuList>
  );
};


