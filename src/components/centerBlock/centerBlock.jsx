/* eslint-disable react/self-closing-comp */
// import styled from "styled-components";
import PlaylistItem from "../playlistItem/playlistItem.jsx";
import FilterBlock from "../filterBlock/filterBlock.jsx"

import * as S from "./centerBlock";

 function CenterBlock() {
    return (
        <S.MainCenterBlock>
            <S.CenterBlockSearch>
                <S.SearchSvg xlinkHref="img/icon/sprite.svg#icon-search">
                </S.SearchSvg>
                <S.SearchText type="search" placeholder="Поиск" name="search"></S.SearchText>
            </S.CenterBlockSearch>
            <S.CenterBlockH2>Треки</S.CenterBlockH2>
            <S.CenterBlockFilter>
                <FilterBlock/>
            </S.CenterBlockFilter>
            <S.CenterBlockContent>
                <S.PlaylistTitle>
                    <S.PlaylistTitleCol>ТРЕК</S.PlaylistTitleCol>
                    <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
                    <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
                    <S.PlaylistTitleCol4></S.PlaylistTitleCol4>
                </S.PlaylistTitle>
                <PlaylistItem/>
            </S.CenterBlockContent>
        </S.MainCenterBlock>
    );
  };

export default CenterBlock;