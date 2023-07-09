import PlaylistItem from './playlistItem';
import { useGetAllTracksQuery } from '../../services/api';
import * as S from "./playlistTracks.style";

function Playlist() {
  const {data = []} = useGetAllTracksQuery();
  const playlistItems = data.map((item) => (
    <PlaylistItem
      key={item.id}
      track={{
        id: item.id,
        title: item.name,
        author: item.author,
        album: item.album,
        time: (item.duration_in_seconds / 60).toFixed(2),
      }}
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