/* eslint-disable react/self-closing-comp */
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
// import styled from "styled-components";

// const ContentPlaylist = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//       -ms-flex-direction: column;
//           flex-direction: column;
//   overflow-y: auto;
// `;

// const Item = styled.div`
//   width: 100%;
//   display: block;
//   margin-bottom: 12px;
// `;

// const PlaylistTrack = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//       -ms-flex-direction: row;
//           flex-direction: row;
//   -webkit-box-pack: justify;
//       -ms-flex-pack: justify;
//           justify-content: space-between;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;
// `;

// const TrackTitle = styled.div`
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
//   width: 447px;
// `;

// const TrackTitleImage = styled.div`
//   width: 51px;
//   height: 51px;
//   padding: 16px;
//   background: #313131;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;
//   -webkit-box-pack: center;
//       -ms-flex-pack: center;
//           justify-content: center;
//   margin-right: 17px;
// `;

// const TrackTitleSvg = styled.svg`
//   width: 18px;
//   height: 17px;
//   fill: transparent;
//   stroke: #4E4E4E;
// `;

// const TrackTitleLink = styled.a`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #FFFFFF;
// `;

// const TrackTitleSpan = styled.span`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #4E4E4E;
// `;

// const TrackAuthor = styled.div`
//   width: 321px;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-pack: start;
//         -ms-flex-pack: start;
//             justify-content: flex-start;
// `;

// const TrackAuthorLink = styled.a`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #FFFFFF;
//   text-align: left;
// `;

// const TrackAlbum = styled.div`
//   width: 245px;
// `;

// const TrackAlbumLink = styled.a`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #696969;
// `;

// const TrackTimeSvg = styled.svg`
//   width: 14px;
//   height: 12px;
//   margin-right: 17px;
//   fill: transparent;
//   stroke: #696969;
// `;

// const TrackTimeText = styled.span`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   text-align: right;
//   color: #696969;
// `;

import * as S from "./styles";

function PlaylistItem() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.ContentPlaylist>
      <S.Item>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              {isLoading ? (
                <Skeleton count={1} width={51} height={51}/>
              ) : (          
                <S.TrackTitleSvg xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-note"></S.TrackTitleSvg>
              )}
            </S.TrackTitleImage>
            <div className="track__title-text">
              {isLoading ? (
                <Skeleton count={1} width={350}/>
              ) : (    
                <S.TrackTitleLink>Guilt<S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
              )}
            </div>
          </S.TrackTitle>
          <S.TrackAuthor>
            {isLoading ? (
              <Skeleton count={1} width={300}/>
            ) : (    
              <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>      
            )}
          </S.TrackAuthor>
          <S.TrackAlbum>
            {isLoading ? (
              <Skeleton count={1} width={245}/>
            ) : (    
              <S.TrackAlbumLink href="http://">Welcome Reality</S.TrackAlbumLink>   
            )}
          </S.TrackAlbum>
          {isLoading ? (
            <Skeleton count={1}/>
          ) : (    
            <div className="track__time">   
              <S.TrackTimeSvg xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-like"></S.TrackTimeSvg>
              <S.TrackTimeText>4:44</S.TrackTimeText>
            </div>   
          )}
        </S.PlaylistTrack>
      </S.Item>
    </S.ContentPlaylist>
  );
};


export default PlaylistItem;

      // <div className="content__playlist playlist">
      //   <div className="playlist__item">
      //     <div className="playlist__track track">
      //       <div className="track__title">
      //         <div className="track__title-image">
      //           {isLoading ? (
      //             <Skeleton count={1} width={51} height={51}/>
      //               ) : (          
      //                 <svg className="track__title-svg" alt="music">
      //                   <use xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-note" />
      //                 </svg>
      //           )}
      //         </div>
      //         <div className="track__title-text">
      //         {isLoading ? (
      //           <Skeleton count={1} width={350}/>
      //             ) : (    
      //               <a className="track__title-link" href="http://">
      //                 Guilt <span className="track__title-span" />
      //               </a>
      //             )}
      //         </div>
      //       </div>
      //       <div className="track__author">
      //         {isLoading ? (
      //           <Skeleton count={1} width={300}/>
      //             ) : (    
      //               <a className="track__author-link" href="http://">
      //                 Nero
      //               </a>      
      //         )}
      //       </div>
      //       <div className="track__album">
      //         {isLoading ? (
      //             <Skeleton count={1} width={245}/>
      //               ) : (    
      //                 <a className="track__album-link" href="http://">
      //                 Welcome Reality
      //                 </a>     
      //           )}
      //       </div>
      //         {isLoading ? (
      //               <Skeleton count={1}/>
      //                 ) : (    
      //                   <div className="track__time">   
      //                   <svg className="track__time-svg" alt="time">
      //                     <use xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-like" />
      //                   </svg>
      //                   <span className="track__time-text">4:44</span>
      //                 </div>   
      //             )}

      //     </div>
      //   </div>
      // </div>