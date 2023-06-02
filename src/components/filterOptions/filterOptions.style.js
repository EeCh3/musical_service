import styled from "styled-components";

export const Options = styled.ul`
position: absolute;
z-index: 2;
z-index:2;
background-color: #313131;
width: 248px;
border-radius: 12px;

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 34px;
gap: 10px;

font-weight: 400;
font-size: 20px;
line-height: 24px;
text-decoration-line: underline;
color: #B672FF;
`;

export const DropdownItem = styled.a`
font-weight: 400;
font-size: 20px;
line-height: 24px;

text-decoration-line: underline;
font-feature-settings: 'pnum' on, 'lnum' on;

color: #B672FF;
`;