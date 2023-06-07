/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import sprite from "../../fonts and style/img/icon/sprite.svg";

import * as S from "./musicPlayer.style";

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