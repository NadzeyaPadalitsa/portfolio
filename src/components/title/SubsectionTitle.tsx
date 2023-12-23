import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

export const SubsectionTitle = styled.h3`
  margin-bottom: 20px;
  padding-left: 30px;
  -webkit-text-stroke: 1px ${theme.colors.accent};
  text-transform: uppercase;
  ${font({ family: "'Raleway', sans-serif", color: "transparent", weight: 700, Fmax: 30, Fmin: 24 })}

  @media ${theme.media.mobile} {
    text-align: center;
  }
`
