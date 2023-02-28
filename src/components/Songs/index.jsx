import React from 'react';
import SongsContainer from '../SongsContainer';
import './index.css';
import iconGrid from '../../assets/icon-grid.svg';
import iconGenre from '../../assets/icon-genre.svg';

const Songs = () => {
  const [sort, setSort] = React.useState(false);
  const toggleHandler = () => {
    setSort(!sort);
  };
  return (
    <div className="songs">
      <div className="songs-header">
        {!sort && <h1>all Songs</h1>}{sort && <h1>genres</h1>}
        <div className="icon">
          {sort && <img src={iconGrid} alt="" onClick={toggleHandler} />}
          {!sort && <img src={iconGenre} alt="" onClick={toggleHandler} />}
        </div>
      </div>

      <SongsContainer sort={sort} />
    </div>
  );
};

export default Songs;
