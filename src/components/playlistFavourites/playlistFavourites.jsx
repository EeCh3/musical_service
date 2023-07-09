import PlaylistItem from '../playlistItem/playlistItem';
import { useGetAllTracksQuery } from '../../services/api';
import * as S from "../playlistItem/playlistItem.style";

function PlaylistFavourites() {
    const {data = []} = useGetAllTracksQuery();

    const userId = Number(localStorage.getItem('user_id'));

    const starredList = data.filter(item => item.stared_user.find(user => user.id === userId));

  const playlistItems = starredList.map((item) => (
    <PlaylistItem
      key={item.id}
      track={item}
    />
  ));
  return (
    <S.TrackListContainer>
      <ul>
        {playlistItems}
      </ul>
    </S.TrackListContainer>

  );
}

export default PlaylistFavourites;