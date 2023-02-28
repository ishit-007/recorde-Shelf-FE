import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Sync = () => {
  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate('/songs');
  };
  return (
    <div className="sync">
      <div className="sad padding-down">:((</div>
      <div className="empty padding-down">Seems a bit empty in here...</div>
      <div className="btn">
        <button onClick={redirectHandler}>sync</button>
      </div>
    </div>
  );
};

export default Sync;
