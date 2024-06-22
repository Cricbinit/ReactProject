import React, { useState, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const songs = [
    {
      title: 'Song 1',
      src: './Audio.mp3',
    },
    {
      title: 'Song 2',
      src: './Audio.mp3',
    },
    // Add more songs as needed
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const skipTrackHandler = (direction) => {
    if (direction === 'skip-forward') {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    } else if (direction === 'skip-back') {
      setCurrentSongIndex(
        (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
      );
    }
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={timeUpdateHandler}
        onEnded={() => skipTrackHandler('skip-forward')}
      ></audio>

      <div className="player-controls">
        <p>{currentSong.title}</p>
        <input
          type="range"
          value={currentTime}
          max={audioRef.current ? audioRef.current.duration : 0}
          onChange={dragHandler}
        />
        <div className="buttons">
          <button onClick={() => skipTrackHandler('skip-back')}>Skip Back</button>
          <button onClick={playPauseHandler}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={() => skipTrackHandler('skip-forward')}>Skip Forward</button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
