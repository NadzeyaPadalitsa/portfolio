import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Description = styled.p`
  margin-bottom: 20px;
  padding-left: 30px;
  letter-spacing: 0.72px;
  line-height: 1.4;

  @media ${theme.media.mobile} {
    max-width: 340px;
    padding-left: 0;
    width: 100%;
  }
`
