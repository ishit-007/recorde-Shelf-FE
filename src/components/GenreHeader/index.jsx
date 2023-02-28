import './index.css';
import React from 'react';
import rock from '../../assets/genre-rock.png';
import pop from '../../assets/genre-pop.png';
import country from '../../assets/genre-country.png';
import bollywood from '../../assets/genre-bollywood.png';
import PropTypes from 'prop-types';

const GenreHeader = props => {
  const path = '../../assets/genre-' + props.genre + '.png';
  return (
    <div className="genre-header">
      {/* <img src={rock} alt="" /> */}
      <div className="image">
        {props.genre === 'Rock' && <img src={rock} alt="" />}
        {props.genre === 'Pop' && <img src={pop} alt="" />}
        {props.genre === 'Country' && <img src={country} alt="" />}
        {props.genre === 'Bollywood' && <img src={bollywood} alt="" />}{' '}
      </div>

      <div className="text">
        <div className="text-content">{props.genre}</div>
      </div>
    </div>
  );
};

GenreHeader.propTypes = {
  genre: PropTypes.string,
};
export default GenreHeader;
