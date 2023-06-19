/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import {useThemeContext} from "../../context/themeContext";
import 'react-loading-skeleton/dist/skeleton.css'
import sprite from "../../fonts and style/img/icon/sprite.svg";
import song from "../../Bobby_Marleni_-_Dropin.mp3";

import * as S from "./musicPlayer.style";

 function MusicPlayer() {
  const { theme } = useThemeContext();

  const [percentage, setPercentage] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [position, setPosition] = useState(0)

  const [marginLeft, setMarginLeft] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)

  const rangeRef = useRef()
  const thumbRef = useRef()

  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current

    if(!isPlaying) {
      setIsPlaying(true)
        audio.play()
    } else if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrentDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width
    const thumbWidth = thumbRef.current.getBoundingClientRect().width
    const centerThumb = (thumbWidth / 100) * percentage * -1
    const centerProgressBar =
      thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
    setPosition(percentage)
    setMarginLeft(centerThumb)
    setProgressBarWidth(centerProgressBar)

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

      return () => clearTimeout(timer);
  }, [percentage]);

    return (
      <S.Bar className="bar"style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}>
        <S.BarContent className="bar__content">
          <S.Thumb
            ref={thumbRef}
            style={{
              left: `${position}%`,
              marginLeft: `${marginLeft}px`
            }} />
          <S.BarPlayerProgress         
            type='range'
            value={position}
            ref={rangeRef}
            step='0.01'
            onChange={onChange}
            />         
            <S.BarPlayerBlock>
              <S.BarPlayer >
                <audio ref={audioRef} src={song} onTimeUpdate={getCurrentDuration} onLoadedData={(e) => {setDuration(e.currentTarget.duration)}}></audio>
                <S.PlayerControls>
                  <S.PlayerButtonPrev>
                    <S.PlayerButtonPrevSvg><use xlinkHref={`${sprite}#icon-prev`}/></S.PlayerButtonPrevSvg>
                  </S.PlayerButtonPrev>
                  <S.PlayerButtonPlay onClick={play}>
                    <S.PlayerButtonPlaySvg><use xlinkHref={isPlaying ? `${sprite}#icon-pause` : `${sprite}#icon-play`}/></S.PlayerButtonPlaySvg>
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
                          <S.TrackPlayAuthorLink theme={theme} href="http://">Ты та...</S.TrackPlayAuthorLink>
                        )}
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      {isLoading ? (
                          <Skeleton count={1}/>
                          ) : (
                            <S.TrackPlayAlbumLink theme={theme} href="http://">Баста</S.TrackPlayAlbumLink>
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
        </S.BarContent>
      </S.Bar>
    );
  };

export default MusicPlayer;