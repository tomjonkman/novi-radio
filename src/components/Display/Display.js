import React from 'react';
import './Display.css';

const Display = (props) => {
  return (
    <div className="Display">
      <p className="title">
        {props.channelName}
      </p>
      <p className="subtitle">
        {props.frequency}
      </p>
    </div>)
};

export default Display;
