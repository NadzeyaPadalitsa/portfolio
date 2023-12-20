import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { VisuallyHidden } from '../../components/VisuallyHidden';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
          <AddressList>
            <AddressLink href={"tel:+375298066793"}>
              <Icon iconId={"tel"} width={"20px"} height={"20px"} viewBox={"0 0 25 25"} />
              <span>+375298066793</span>
            </AddressLink>
            <AddressLink href={"mailto:nadya-manko@mail.ru"}>
              <Icon iconId={"email"} width={"20px"} height={"20px"} viewBox={"0 0 25 25"} />
              <span>nadya-manko@mail.ru</span>
            </AddressLink>
          </AddressList>
          <SocialList>
            <SocialItem>
              <SocialLink href={"https://t.me/@nadya31121990"}>
                <VisuallyHidden>My telegram</VisuallyHidden>
                <Icon iconId={"telegram"} width={"40px"} height={"34px"} viewBox={"0 0 40 34"} />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href={"https://www.instagram.com/Nadin3112/"}>
                <VisuallyHidden>My instagram</VisuallyHidden>
                <Icon iconId={"instagram"} width={"35px"} height={"35px"} viewBox={"0 0 35 35"} />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href={"https://github.com/Nadin3112"}>
                <VisuallyHidden>My github</VisuallyHidden>
                <Icon iconId={"gith"} width={"35px"} height={"35px"} viewBox={"0 0 35 35"} />
              </SocialLink>
            </SocialItem>
          </SocialList>
          <Copyright>© 2023 Nadia Padalitsa, All Rights Reserved.</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 30px;
  background-color: ${theme.colors.secondaryBg}
`
const AddressList = styled.address`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`
const AddressLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${theme.colors.font};
  font-style: normal;
  font-size: 16px;

  span {
    align-self: center;
  }
`
const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  width: 60px;
  height: 60px;
  background-color: ${theme.colors.primaryBg};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-image: linear-gradient(to left top, ${theme.colors.accent} 10%,  transparent 30%, transparent 70%, ${theme.colors.accent} 90%);
  border-image-slice: 1;

  &:hover{
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
  }
`
const Copyright = styled.small`

`
