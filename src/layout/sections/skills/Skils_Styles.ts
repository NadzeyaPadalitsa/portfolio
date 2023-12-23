import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Skills = styled.section`

`

//SoftSkill

const SoftList = styled.ul`
  padding-left: 50px;
  list-style-image: linear-gradient(to left top, ${theme.colors.accent} 10%,  transparent 30%, transparent 70%, ${theme.colors.accent} 90%);
  margin-bottom: 50px;
`
const SoftText = styled.li`
&:not(:last-child) {
  margin-bottom: 30px;
}
`

//HardSkill

const HardList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0;
  list-style-type: none;
`
const HardSKillItem = styled.li`
  align-self: center;
  background-color: ${theme.colors.secondaryBg};
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 150px;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  border: 1px solid transparent;
  border-image: linear-gradient(to left top, ${theme.colors.accent} 10%,  transparent 30%, transparent 70%, ${theme.colors.accent} 90%);
  border-image-slice: 1;
`
const HardItemTitle = styled.h4`
  text-transform: uppercase;
  text-align: center;
  color: ${theme.colors.font}
`

export const S = {
  Skills,
  SoftList,
  SoftText,
  HardList,
  HardSKillItem,
  HardItemTitle
}