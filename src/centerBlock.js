/* eslint-disable react/self-closing-comp */
import styled from "styled-components";
import PlaylistItem from "./playlistItem";
import FilterBlock from "./filterBlock"

const MainCenterBlock = styled.div`
    width: auto;
    -webkit-box-flex: 3;
        -ms-flex-positive: 3;
            flex-grow: 3;
    padding: 20px 40px 20px 111px;
`;

const CenterBlockSearch = styled.div`
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

const SearchSvg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #FFFFFF;
    fill: transparent;
`;

const SearchText = styled.input`
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

const CenterBlockH2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`;
const CenterBlockFilter = styled.div`
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
  margin-bottom: 51px;
  gap: 10px;
`;

const CenterBlockContent =  styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`;


 function CenterBlock() {
    return (
        <MainCenterBlock>
            <CenterBlockSearch>
                <SearchSvg xlinkHref="img/icon/sprite.svg#icon-search">
                </SearchSvg>
                <SearchText type="search" placeholder="Поиск" name="search"></SearchText>
            </CenterBlockSearch>
            <CenterBlockH2>Треки</CenterBlockH2>
            <CenterBlockFilter>
                <FilterBlock/>
            </CenterBlockFilter>
            <CenterBlockContent>
                <PlaylistItem/>
            </CenterBlockContent>
        </MainCenterBlock>
    );
  };

export default CenterBlock;