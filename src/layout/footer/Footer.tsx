import React from 'react';
import { FlexWrapper } from '../../components/FlexWrapper';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify={"space-between"}>
        <AddressList>
          <AddressLink href={"tel:+375298066793"}>+375298066793</AddressLink>
          <AddressLink href={"mailto:nadya-manko@mail.ru"}>nadya-manko@mail.ru</AddressLink>
        </AddressList>
        <SocialList>
          <SocialItem>
            <SocialLink href={"https://t.me/@nadya31121990"}>
              <Icon iconId={"telegram"} width={"40px"} height={"34px"} viewBox={"0 0 40 34"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href={"https://github.com/Nadin3112"}>
              <Icon iconId={"gith"} width={"40px"} height={"34px"} viewBox={"0 0 40 34"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href={"https://www.instagram.com/Nadin3112/"}>
              <Icon iconId={"instagram"} width={"40px"} height={"34px"} viewBox={"0 0 40 34"}/>
            </SocialLink>
          </SocialItem>
        </SocialList>
      </FlexWrapper>
      <Copyright>© 2023 Nadia Padalitsa, All Rights Reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 10px;
  background-color: #080357;
`
const AddressList = styled.address`

`
const AddressLink = styled.a`
    color: white;
  &:not(:last-child) {
    margin-right: 20px;
  }
`
const SocialList = styled.ul`
  display: flex;
  gap: 10px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.p`
  text-align: center;
  color: #ffffff;
`
