/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

// export const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     -webkit-box-sizing: border-box;
//     box-sizing: border-box;
//     font-family: 'Stratos-Regular';
//     font-style: normal;
//     font-weight: 400;
//     src: local('Stratos-Regular'),
//       url("../fonts/Stratos-Regular.woff2") format('woff2'),

//     width: 100%;
//     height: 100%;
//     font-family: 'StratosSkyeng', sans-serif;
//     color: #FFFFFF;
//   }
// `;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`;
export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;

export const Main = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
      flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
      justify-content: space-between;
`;

export const Author = styled.div`
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

export const NavBurger = styled.div`
  width: 20px;
  height: 10px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
`;

export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #D3D3D3;
`;

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`;

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`;

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MenuLink = styled.a`
  color: #FFFFFF;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

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


// export const CenterBlockFilter = styled.div`
//   position: relative;
//     z-index: 0;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-orient: horizontal;
//     -webkit-box-direction: normal;
//         -ms-flex-direction: row;
//             flex-direction: row;
//     -webkit-box-align: center;
//         -ms-flex-align: center;
//             align-items: center;
//     margin-bottom: 51px;
//     gap: 10px;
//   `;

  export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
  `;

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

export const Nav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`;

export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;

export const Bar =  styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;

export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
  width: 100%;
  background: #2E2E2E;
`;

export const BarPlayerBlock = styled.div`
padding-right: 53px;
  height: 73px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
`;

export const BarPlayer = styled.div`
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
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
`;

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const PlayerButtonPrev =  styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;

  margin-right: 23px;        
`;

export const PlayerButtonPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`;

export const PlayerButtonPlay = styled.div`
  margin-right: 23px;
`;

export const PlayerButtonPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #D9D9D9;
`;

export const PlayerButtonNext = styled.div`
  margin-right: 28px;
  fill: #a53939;
`;

export const PlayerButtonNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #D9D9D9;
`;

export const PlayerButtonRepeat = styled.div`
  margin-right: 24px;
`;

export const PlayerButtonRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const PlayerButtonShuffle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
`;

export const PlayerButtonShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
`;

export const TrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
      grid-template-columns: auto 1fr;
      grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
`;

export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`;

export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4E4E4E;
`;

export const TrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`; 

export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #FFFFFF;
`;

export const TrackPlayLikeDis = styled.div`
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
  margin-left: 26%;
`;

export const TrackPlayLike = styled.div`
  padding: 5px;
`;

export const TrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const TrackPlayDislike = styled.div`
  margin-left: 28.5px;
`;

export const TrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`;

export const VolumeContent = styled.div`
padding 20%;
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
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: end;
`;

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;

export const VolumeProgress = styled.div`


  width: 109px;
`;

export const VolumeProgressLine = styled.input`
 
  width: 109px;
`;

export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  overflow-y: auto;
`;

export const Item = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

export const PlaylistTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
`;

export const TrackTitle = styled.div`
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
  width: 447px;
`;

export const TrackTitleImage = styled.div`
  // width: 51px;
  // height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-right: 17px;
`;

export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4E4E4E;
`;

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`;

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4E4E4E;
`;

export const TrackAuthor = styled.div`
  width: 321px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
`;

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  text-align: left;
`;

export const TrackAlbum = styled.div`
  width: 245px;
`;

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;

export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 40px 20px 0;
`;

export const SidebarPersonal = styled.div`
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
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  padding: 12px 80px 15px 0px
`;

export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  margin-right: 16px;
`;

export const SidebarAvatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
`;

export const SidebarBlock = styled.div`
height: 100%;
  padding: 240px 80px 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
`;

export const SidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
`;

export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const SidebarLink = styled.div`
  width: 100%;
  height: 100%;
`;

export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`;

export const Year = styled.div`
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
