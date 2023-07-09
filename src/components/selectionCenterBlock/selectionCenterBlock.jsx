/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
// import styled from "styled-components";
import Playlist from "../playlistItem/playlistTracks";
// import FilterBlock from "../filterBlock/filterBlock"
import { useThemeContext } from "../../context/themeContext";

import * as S from "../centerBlock/centerBlock.style";

 function SelectionCenterBlock() {
    const { theme } = useThemeContext();

    return (
        <S.MainCenterBlock>
            <S.CenterBlockSearch>
                <S.SearchSvg xlinkHref="img/icon/sprite.svg#icon-search">
                </S.SearchSvg>
                <S.SearchText theme={theme} type="search" placeholder="Поиск" name="search"></S.SearchText>
            </S.CenterBlockSearch>
            <S.CenterBlockH2>Треки</S.CenterBlockH2>
            <S.CenterBlockContent>
                <S.PlaylistTitle>
                    <S.PlaylistTitleCol>ТРЕК</S.PlaylistTitleCol>
                    <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
                    <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
                    <S.PlaylistTitleCol4 ><img theme={theme} src={theme.trackTimeImg}></img></S.PlaylistTitleCol4>
                </S.PlaylistTitle>
                <Playlist/>
            </S.CenterBlockContent>
        </S.MainCenterBlock>
    );
  };

export default SelectionCenterBlock;