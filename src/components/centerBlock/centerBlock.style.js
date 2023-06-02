/* eslint-disable react/self-closing-comp */
import styled from "styled-components";

export const MainCenterBlock = styled.div`
    width: auto;
    -webkit-box-flex: 3;
        -ms-flex-positive: 3;
            flex-grow: 3;
    padding: 20px 100px 20px 60px;
`;

export const CenterBlockSearch = styled.div`
    width: 100%;
    border-bottom: 1px solid #4E4E4E;
    margin-bottom: 51px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`;

export const SearchSvg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #FFFFFF;
    fill: transparent;
`;

export const SearchText = styled.input`
    -webkit-box-flex: 100;
    -ms-flex-positive: 100;
        flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    ::placeholder {
        background-color: transparent;
        color: #FFFFFF;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
`;

export const CenterBlockH2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`;
export const CenterBlockFilter = styled.div`
position: relative;
  z-index: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-bottom: 25px;
  gap: 10px;
`;

export const CenterBlockContent =  styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`;

export const PlaylistTitle = styled.div`
    display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-bottom: 24px;
`;

export const PlaylistTitleCol = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;

    width: 447px;
`;

export const PlaylistTitleCol2 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;

    width: 321px;
`;

export const PlaylistTitleCol3 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;

    width: 245px;
`;

export const PlaylistTitleCol4 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;

    width: 60px;
    text-align: end;
`;