import React, { useState, useRef } from 'react';
import AUDIO from "./Audio.mp3"
function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h2>Audio Player</h2>
      <audio
        ref={audioRef}
        src={AUDIO} // Change this to your audio file path
      />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default AudioPlayer;
