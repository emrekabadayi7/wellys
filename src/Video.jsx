import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

export default function Video() {
  const playerRef = useRef(null);

  const handleVideoEnded = () => {
    playerRef.current.seekTo(8, 'seconds');
    playerRef.current.play();
  };

  return (
    <div className="video-background overflow-x-hidden text-white relative brightness-[0.4]">
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=SSuFWegB4lE?start=10"
        playing
        loop
        muted
        controls={false}
        width="100%"
        height="100%"
        onEnded={handleVideoEnded}
      />
    </div>
  );
}
