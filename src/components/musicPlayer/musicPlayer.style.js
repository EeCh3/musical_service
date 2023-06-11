import styled from "styled-components"

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
export const Thumb = styled.div`
    width: var(--thumb-width);
    height: var(--thumb-height);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.753);
    z-index: 3;
    background: rgb(255, 255, 255);
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translate(0%, -50%);
    pointer-events: none; 
    user-select: none; 
`

export const BarPlayerProgress = styled.input`
 width: 100%;
 background: #2E2E2E;
 height: 5px;
 curcor: pointer;
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