import React from 'react';
import './index.css';
import SingleSong from '../SingleSong';
import PropTypes from 'prop-types';
import { GET_SONGS_DATA, GET_LIKES_DATA, makeRequest } from '../../util/makeRequest.js';
import { useNavigate } from 'react-router-dom';
import GenreHeader from '../GenreHeader';

const SongsContainer = props => {
  const [allSongs, setAllSongs] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const navigate = useNavigate();

  // console.log(allSongs);

  React.useEffect(() => {
    makeRequest(GET_SONGS_DATA, {}, navigate).then(response => {
      const songsData = response.data;
      const genresData = songsData.map(song => song.genre.name);
      const uniqueGenres = [...new Set(genresData)];
      const promises = [];
      songsData.forEach(song => {
        promises.push(makeRequest(GET_LIKES_DATA(song.id), {}, navigate));
      });
      const likesData = [];
      Promise.all(promises).then(responses => {
        likesData.push(responses.map(response => response.data));
        for (let i = 0; i < songsData.length; i++) {
          songsData[i].likes = likesData[0][i];
        }
        setAllSongs(songsData);
        setGenres(uniqueGenres);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="songs-container">
      {!props.sort &&
        allSongs.map(song => (
          <SingleSong
            id={song.id}
            key={Math.random()}
            name={song.name}
            artistName={song.artist.name}
            image={song.imageUrl}
            genre={song.genre}
            likes={song.likes}
          />
        ))}

      {props.sort &&
        genres.map(genre => {
          const filteredSongs = allSongs.filter(song => song.genre.name === genre);
          return (
            <div className="sorted-songs">
              <GenreHeader genre={genre} key={Math.random()} />
              <div className="category-songs">
                {filteredSongs.map(song => (
                  <SingleSong
                    key={Math.random()}
                    id={song.id}
                    name={song.name}
                    artistName={song.artist.name}
                    image={song.imageUrl}
                    genre={song.genre}
                    likes={song.likes}
                  />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

SongsContainer.propTypes = {
  sort: PropTypes.bool,
};

export default SongsContainer;
