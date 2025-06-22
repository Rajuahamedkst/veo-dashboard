"use client";
import React, { useState } from 'react';

const videos = [
  { id: 1, videoFile: '/videos/man.mp4' },
  { id: 2, videoFile: '/videos/chief.mp4' },
  { id: 3, videoFile: '/videos/women.mp4' },
  { id: 4, videoFile: '/videos/cat.mp4' },
  { id: 5, videoFile: '/videos/mountain.mp4' },
  { id: 6, videoFile: '/videos/monkey.mp4' },
  { id: 7, videoFile: '/videos/man.mp4' },
  { id: 8, videoFile: '/videos/chief.mp4' },
  { id: 9, videoFile: '/videos/women.mp4' }
];

export default function VideoPlayerTwo() {
  const [hoveredId, setHoveredId] = useState(null);

  // Determine column position (1, 2, or 3)
  const getColumnPosition = (id) => {
    return (id - 1) % 3 + 1;
  };

  return (
    <div className="homeVideo">
      <div className="homevideo-grid">
        {videos.map(video => {
          const column = getColumnPosition(video.id);
          return (
            <div 
              key={video.id}
              className={`homevideo-container 
                ${hoveredId === video.id ? 'hovered' : ''}
                ${hoveredId && hoveredId !== video.id ? 'diminished' : ''}
                column-${column}`}
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="homevideo-element"
              >
                <source src={video.videoFile} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    </div>
  );
}