import PlaylistItem from './playlistItem';
import { useGetAllTracksQuery } from '../../services/api';
import * as S from "./playlistTracks.style";

function Playlist() {
  const {data = []} = useGetAllTracksQuery();
  const playlistItems = data.map((item) => (
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

export default Playlist;