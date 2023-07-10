/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
/* eslint-disable react/self-closing-comp */
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useThemeContext} from "../../context/themeContext";
import { useSetLikeMutation, useSetDislikeMutation } from '../../services/api'
import { setCurrentTrack } from '../../store/setTracks';

import sprite from "../../fonts and style/img/icon/sprite.svg"
import * as S from "./playlistItem.style";

function PlaylistItem({track}) {
  const { id: trackID, name, author, album, stared_user, duration_in_seconds } = track;

  const [postLike] =  useSetLikeMutation();
  const [postDislike] = useSetDislikeMutation();
  const dispatch = useDispatch()

  const userId = Number(localStorage.getItem('user'));

  const [isFavourite, setFavourite] = useState(false)
  
  useEffect(() => {
    if (stared_user) {
        setFavourite(stared_user.some((user) => user.id === userId));
    } else {
        setFavourite(false);
    }}, [stared_user, userId]);

  const handleFavorite = () => {
    if (isFavourite) postDislike(trackID)
    else postLike(trackID)
    alert(`added`)
  }

  const handlesetCurrentTrack = () => {
    dispatch(
      setCurrentTrack({
        track
      })
    );
  };

  const { theme } = useThemeContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.ContentPlaylist>
      <S.Item onClick={() => handlesetCurrentTrack()}>
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
                <S.TrackTitleLink theme={theme}>{name}<S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
              )}
            </div>
          </S.TrackTitle>
          <S.TrackAuthor>
            {isLoading ? (
              <Skeleton count={1} width={300}/>
            ) : (    
              <S.TrackAuthorLink theme={theme} href="http://">{author}</S.TrackAuthorLink>      
            )}
          </S.TrackAuthor>
          <S.TrackAlbum>
            {isLoading ? (
              <Skeleton count={1} width={245}/>
            ) : (    
              <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>   
            )}
          </S.TrackAlbum>
          {isLoading ? (
            <Skeleton count={1}/>
          ) : (    
            <div className="track__time">   
              <S.TrackTimeSvg xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-like" onClick={handleFavorite}><use xlinkHref={`${sprite}#icon-like`} fill={isFavourite ? 'red' : 'gray'} /></S.TrackTimeSvg>
              <S.TrackTimeText>{(duration_in_seconds / 60).toFixed(2)}</S.TrackTimeText>
            </div>   
          )}
        </S.PlaylistTrack>
      </S.Item>
    </S.ContentPlaylist>
  );
};

export default PlaylistItem;
