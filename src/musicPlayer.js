/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
// import styled from "styled-components"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
 import sprite from "./fonts and style/img/icon/sprite.svg";

// const Bar =  styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   background: rgba(28, 28, 28, 0.5);
// `;

// const BarContent = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//       -ms-flex-direction: column;
//           flex-direction: column;
// `;

// const BarPlayerProgress = styled.div`
//   width: 100%;
//   background: #2E2E2E;
// `;

// const BarPlayerBlock = styled.div`
//   height: 73px;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-orient: horizontal;
//     -webkit-box-direction: normal;
//         -ms-flex-direction: row;
//             flex-direction: row;
//     -webkit-box-pack: justify;
//         -ms-flex-pack: justify;
//             justify-content: space-between;
// `;

// const BarPlayer = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//       -ms-flex-direction: row;
//           flex-direction: row;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;
//   -webkit-box-pack: start;
//       -ms-flex-pack: start;
//           justify-content: flex-start;
// `;

// const PlayerControls = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//       -ms-flex-direction: row;
//           flex-direction: row;
//   padding: 0 27px 0 31px;
// `;

// const PlayerButtonPrev =  styled.div`
//   padding: 5px;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;

//   margin-right: 23px;        
// `;

// const PlayerButtonPrevSvg = styled.svg`
//   width: 15px;
//   height: 14px;
// `;

// const PlayerButtonPlay = styled.div`
//   margin-right: 23px;
// `;

// const PlayerButtonPlaySvg = styled.svg`
//   width: 22px;
//   height: 20px;
//   fill: #D9D9D9;
// `;

// const PlayerButtonNext = styled.div`
//   margin-right: 28px;
//   fill: #a53939;
// `;

// const PlayerButtonNextSvg = styled.svg`
//   width: 15px;
//   height: 14px;
//   fill: inherit;
//   stroke: #D9D9D9;
// `;

// const PlayerButtonRepeat = styled.div`
//   margin-right: 24px;
// `;

// const PlayerButtonRepeatSvg = styled.svg`
//   width: 18px;
//   height: 12px;
//   fill: transparent;
//   stroke: #696969;
// `;

// const PlayerButtonShuffle = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;
// `;

// const PlayerButtonShuffleSvg = styled.svg`
//   width: 19px;
//   height: 12px;
//   fill: transparent;
//   stroke: #696969;
// `;

// const PlayerTrackPlay = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//       -ms-flex-direction: row;
//           flex-direction: row;
// `;

// const TrackPlayContain = styled.div`
//   width: auto;
//   display: -ms-grid;
//   display: grid;
//   -ms-grid-columns: auto 1fr;
//       grid-template-columns: auto 1fr;
//       grid-template-areas: "image author" "image album";
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;
// `;

// const TrackPlayImage = styled.div`
//   width: 51px;
//   height: 51px;
//   background-color: #313131;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;
//   -webkit-box-pack: center;
//       -ms-flex-pack: center;
//           justify-content: center;
//   margin-right: 12px;
//   -ms-grid-row: 1;
//   -ms-grid-row-span: 2;
//   -ms-grid-column: 1;
//   grid-area: image;
// `;

// const TrackPlaySvg = styled.svg`
//   width: 18px;
//   height: 17px;
//   fill: transparent;
//   stroke: #4E4E4E;
// `;

// const TrackPlayAuthor = styled.div`
//   -ms-grid-row: 1;
//   -ms-grid-column: 2;
//   grid-area: author;
//   min-width: 49px;
// `;

// const TrackPlayAuthorLink = styled.a`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #FFFFFF;
//   white-space: nowrap;
// `;

// const TrackPlayAlbum = styled.div`
//   -ms-grid-row: 2;
//   -ms-grid-column: 2;
//   grid-area: album;
//   min-width: 49px;
// `; 

// const TrackPlayAlbumLink = styled.a`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 13px;
//   line-height: 24px;
//   color: #FFFFFF;
// `;

// const TrackPlayLikeDis = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//       -ms-flex-direction: row;
//           flex-direction: row;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;
//   margin-left: 26%;
// `;

// const TrackPlayLike = styled.div`
//   padding: 5px;
// `;

// const TrackPlayLikeSvg = styled.svg`
//   width: 14px;
//   height: 12px;
//   fill: transparent;
//   stroke: #696969;
// `

// const TrackPlayDislike = styled.div`
//   margin-left: 28.5px;
// `;

// const TrackPlayDislikeSvg = styled.svg`
//   width: 14.34px;
//   height: 13px;
//   fill: transparent;
//   stroke: #696969;
// `;

// const VolumeContent = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//       -ms-flex-direction: row;
//           flex-direction: row;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;
//   -webkit-box-pack: end;
//       -ms-flex-pack: end;
//           justify-content: end;
// `;

// const VolumeImage = styled.div`
//   width: 13px;
//   height: 18px;
//   margin-right: 17px;
// `;

// const VolumeSvg = styled.svg`
//   width: 13px;
//   height: 18px;
//   fill: transparent;
// `;

// const VolumeProgress = styled.div`
//   width: 109px;
// `;

// const VolumeProgressLine = styled.input`
//   width: 109px;
// `;
import * as S from "./styles";

 function MusicPlayer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
    return (
      <S.Bar className="bar">
        <S.BarContent className="bar__content">
          <S.BarPlayerProgress>
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.PlayerButtonPrev>
                    <S.PlayerButtonPrevSvg><use xlinkHref={`${sprite}#icon-prev`}/></S.PlayerButtonPrevSvg>
                  </S.PlayerButtonPrev>
                  <S.PlayerButtonPlay>
                    <S.PlayerButtonPlaySvg><use xlinkHref={`${sprite}#icon-play`}/></S.PlayerButtonPlaySvg>
                  </S.PlayerButtonPlay>
                  <S.PlayerButtonNext>
                    <S.PlayerButtonNextSvg><use xlinkHref={`${sprite}#icon-next`}/></S.PlayerButtonNextSvg>
                  </S.PlayerButtonNext>
                  <S.PlayerButtonRepeat>
                    <S.PlayerButtonRepeatSvg><use xlinkHref={`${sprite}#icon-repeat`}/></S.PlayerButtonRepeatSvg>
                  </S.PlayerButtonRepeat>
                  <S.PlayerButtonShuffle>
                    <S.PlayerButtonShuffleSvg><use xlinkHref={`${sprite}#icon-shuffle`}/></S.PlayerButtonShuffleSvg>
                  </S.PlayerButtonShuffle>
                </S.PlayerControls>
                <S.PlayerTrackPlay>
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      {isLoading ? (
                        <Skeleton count={1} width={51} height={51} />
                        ) : (
                          <S.TrackPlaySvg><use xlinkHref={`${sprite}#icon-note`}/></S.TrackPlaySvg>
                        )}
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>
                    {isLoading ? (
                        <Skeleton count={1}/>
                        ) : (
                          <S.TrackPlayAuthorLink href="http://">Ты та...</S.TrackPlayAuthorLink>
                        )}
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      {isLoading ? (
                          <Skeleton count={1}/>
                          ) : (
                            <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
                          )}
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>
                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike className="_btn-icon">
                      <S.TrackPlayLikeSvg><use xlinkHref={`${sprite}#icon-like`}/></S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike className="_btn-icon">
                      <S.TrackPlayDislikeSvg><use xlinkHref={`${sprite}#icon-dislike`}/></S.TrackPlayDislikeSvg>
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
              </S.BarPlayer>
              <div className="bar__volume-block volume">
                <S.VolumeContent>
                  <S.VolumeImage>
                    <S.VolumeSvg><use xlinkHref={`${sprite}#icon-volume`}/></S.VolumeSvg>
                  </S.VolumeImage>
                  <S.VolumeProgress className="_btn">
                    <S.VolumeProgressLine className="_btn" type="range" name="range"></S.VolumeProgressLine>
                  </S.VolumeProgress>
                </S.VolumeContent>
              </div>
            </S.BarPlayerBlock>
          </S.BarPlayerProgress>
        </S.BarContent>
      </S.Bar>
      // <div className="bar">
      //   <div className="bar__content">
      //     <div className="bar__player-progress" />
      //     <div className="bar__player-block">
      //       <div className="bar__player player">
      //         <div className="player__controls">
      //           <div className="player__btn-prev">
      //             <svg className="player__btn-prev-svg" alt="prev">
      //                <use xlinkHref={`${sprite}#icon-prev`} />
      //             </svg>
      //           </div>
      //           <div className="player__btn-play _btn">
      //             <svg className="player__btn-play-svg" alt="play">
      //             <use xlinkHref={`${sprite}#icon-play`} />
      //             </svg>
      //           </div>
      //           <div className="player__btn-next">
      //             <svg className="player__btn-next-svg" alt="next">
      //             <use xlinkHref={`${sprite}#icon-next`} />
      //             </svg>
      //           </div>
      //           <div className="player__btn-repeat _btn-icon">
      //             <svg className="player__btn-repeat-svg" alt="repeat">
      //             <use xlinkHref={`${sprite}#icon-repeat`} />
      //             </svg>
      //           </div>
      //           <div className="player__btn-shuffle _btn-icon">
      //             <svg className="player__btn-shuffle-svg" alt="shuffle">
      //             <use xlinkHref={`${sprite}#icon-shuffle`} />
      //             </svg>
      //           </div>
      //         </div>
      //         <div className="player__track-play track-play">
      //           <div className="track-play__contain">
      //           <div className="track-play__image">
      //           {isLoading ? (
      //             <Skeleton count={1} width={51} height={51} />
      //             ) : (
      //               <svg className="track-play__svg" alt="music">
      //               <use xlinkHref={`${sprite}#icon-note`} />
      //               </svg>
      //             )}
      //           </div>
      //             <div className="track-play__author">
      //               {isLoading ? (
      //                 <Skeleton count={1} />
      //                 ) : (
      //                   <a className="track-play__author-link" href="http://">Ты та...</a>
      //                 )}
      //             </div>
      //             <div className="track-play__album">
      //               {isLoading ? (
      //                   <Skeleton count={1} />
      //                   ) : (
      //                     <a className="track-play__album-link" href="http://">Баста</a>
      //                   )}
      //             </div>
      //           </div>
  
      //           <div className="track-play__like-dis">
      //             <div className="track-play__like _btn-icon">
      //               <svg className="track-play__like-svg" alt="like">
      //               <use xlinkHref={`${sprite}#icon-like`} />
      //               </svg>
      //             </div>
      //             <div className="track-play__dislike _btn-icon">
      //               <svg className="track-play__dislike-svg" alt="dislike">
      //               <use xlinkHref={`${sprite}#icon-dislike`} />
      //               </svg>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="bar__volume-block volume">
      //         <div className="volume__content">
      //           <div className="volume__image">
      //             <svg className="volume__svg" alt="volume">
      //             <use xlinkHref={`${sprite}#icon-volume`} />
      //             </svg>
      //           </div>
      //           <div className="volume__progress _btn">
      //             <input className="volume__progress-line _btn" type="range" name="range" />
      //           </div>
      //         </div>
      //       </div>
      // </div>
      // </div>
      // </div>
    );
  };

export default MusicPlayer;