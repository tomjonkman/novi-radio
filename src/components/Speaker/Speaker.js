import React from 'react';
import './Speaker.css';

const Speaker = (props) => {
  const positionClassName = (props.position === "left") ? "Speaker--left" : "Speaker--right";
  return (<div className={`Speaker ${positionClassName}`} />)
};

export default Speaker;
