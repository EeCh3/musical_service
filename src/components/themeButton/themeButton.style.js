/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const ThemeButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-color: ${(props) => props.theme.themeButtonBorderColor};
background-color: ${(props) => props.theme.themeButtonBackgroundColor};
margin-top: 26px;

font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  box-sizing: border-box;
  width: 39px;
  height: 39px;
  border: 1px solid ;
  border-radius: 60px;
  padding: 6px 20px;

  &._btn-text_active {
    border-color: #AD61FF;
    color: #AD61FF;
    cursor: pointer;
  }

  &._btn-icon_active {
    fill: transparent;
    stroke: #FFFFFF;
    cursor: pointer;
  }
`

