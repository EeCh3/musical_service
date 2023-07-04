/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Genre = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid;
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
`;