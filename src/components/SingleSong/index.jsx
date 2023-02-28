import React from 'react';
import './index.css';
// eslint-disable-next-line no-unused-vars
import heartGray from '../../assets/heart-gray.svg';
import heart from '../../assets/heart-red.svg';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { makeRequest, UPDATE_LIKES_DATA } from '../../util/makeRequest.js';

const SingleSong = props => {
  const navigate = useNavigate();
  const [likesCount, setLikesCount] = React.useState(props.likes.count);
  const [isLiked, setIsLiked] = React.useState(props.likes.like);
  const likePressHandler = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    const likesObject = {
      data: {
        like: !isLiked,
      },
    };

    makeRequest(UPDATE_LIKES_DATA(props.id), likesObject)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="single-song">
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="song-details-engagement">
        <div className="song-Details">
          <div className="name">{props.name}</div>
          <div className="artist">{props.artistName}</div>
        </div>
        <div className="likes">
          {isLiked && <img src={heart} onClick={likePressHandler} alt="" />}
          {!isLiked && <img src={heartGray} onClick={likePressHandler} alt="" />}
          <p onClick={likePressHandler}>{likesCount}</p>
        </div>
      </div>
    </div>
  );
};

SingleSong.propTypes = {
  name: PropTypes.string,
  artistName: PropTypes.string,
  image: PropTypes.string,
  genre: PropTypes.object,
  likes: PropTypes.object,
};

export default SingleSong;
