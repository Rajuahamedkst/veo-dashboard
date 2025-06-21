'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function VideoPlayer({ video }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
    if (!videoRef.current) return;
    
    if (hoverState) {
      setIsLoading(true);
      videoRef.current.play()
        .then(() => setIsLoading(false))
        .catch(err => {
          console.log('Autoplay:', err);
          setIsLoading(false);
        });
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="video-container"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {/* Thumbnail */}
      {!isHovered && (
        <Image
          src={video.thumbnail}
          alt="Video thumbnail"
          fill
          className="thumbnail"
          priority={video.id <= 3}
        />
      )}
      
      {/* Video Element */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className={`video-element ${isHovered ? 'visible' : 'hidden'}`}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
      >
        <source src={video.videoFile} type="video/mp4" />
      </video>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}