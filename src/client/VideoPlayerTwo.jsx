'use client';
import { useState } from 'react';

export default function VideoGrid({ videos }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div
          key={video.id}
          className={`video-item ${hoveredId === video.id ? 'expanded' : hoveredId ? 'collapsed' : ''}`}
          onMouseEnter={() => setHoveredId(video.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video-element"
          >
            <source src={video.videoFile} type="video/mp4" />
          </video>
          <div className="video-label">Yin Yao</div>
        </div>
      ))}
    </div>
  );
}