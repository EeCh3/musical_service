/* eslint-disable react/self-closing-comp */
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from "./playlistItem";

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
