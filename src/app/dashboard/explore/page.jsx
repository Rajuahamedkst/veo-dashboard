import VideoPlayer from '@/client/VideoPlayer';
import React from 'react'


const videos = [
  {
    id: 1,
    videoFile: '/videos/man.mp4',
    thumbnail: '/thumbnails/chief.png'
  },
  {
    id: 2, 
    videoFile: '/videos/chief.mp4',
    thumbnail: '/thumbnails/chief.png'
  },
  // Add at least 3 more videos to see the grid properly
  {
    id: 3,
    videoFile: '/videos/women.mp4',
    thumbnail: '/thumbnails/women.png'
  },
  {
    id: 4,
    videoFile: '/videos/cat.mp4',
    thumbnail: '/thumbnails/cat.png'
  },
  {
    id: 5,
    videoFile: '/videos/mountain.mp4',
    thumbnail: '/thumbnails/mountain.png'
  },
  {
    id: 6,
    videoFile: '/videos/monkey.mp4',
    thumbnail: '/thumbnails/monkey.png'
  },
  {
    id: 7,
    videoFile: '/videos/man.mp4',
    thumbnail: '/thumbnails/chief.png'
  },
  {
    id: 8, 
    videoFile: '/videos/chief.mp4',
    thumbnail: '/thumbnails/chief.png'
  },
  // Add at least 3 more videos to see the grid properly
  {
    id: 9,
    videoFile: '/videos/women.mp4',
    thumbnail: '/thumbnails/women.png'
  },
  {
    id: 10,
    videoFile: '/videos/cat.mp4',
    thumbnail: '/thumbnails/cat.png'
  },
  {
    id: 11,
    videoFile: '/videos/mountain.mp4',
    thumbnail: '/thumbnails/mountain.png'
  },
  {
    id: 12,
    videoFile: '/videos/monkey.mp4',
    thumbnail: '/thumbnails/monkey.png'
  }
];

export default function Explore() {
 
  return (
    <>
 <div className="dashboard-header">
        <div className="header-content">
          <article className="main-title">Features</article>
          <article className="subtitle">
          Discover trending videos for you
          </article>
        </div>
        <h1 className="textHeader animate__animated animate__fadeInDown">
          Explore  <span>Amazing Videos</span>
        </h1>
        <article className="subcar animate__animated animate__fadeInDown">
          Discover incredible content from talented creators around the world
        </article>
      </div>
      <div className="exploreVideo-content">
        <div className="video-grid">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              <VideoPlayer video={video} />
              <h3>{video.title}</h3>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
