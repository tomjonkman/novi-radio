import React, { useRef, useEffect } from 'react';

const Player = (props) => {
  const audioElement = useRef(null);
  useEffect(() => {
    if (audioElement.current && audioElement.current) {
      audioElement.current.src = props.stream;
      audioElement.current.play();
    }
  });

  return (
    <audio controls={false} ref={audioElement}>
      <source type="audio/mp3" />
    </audio>
  );
};

export default Player;
