import ImageToVideoInput from '@/client/ImageToVideoInput'
import React from 'react'

export default function ImageToVideo() {
  return (
    <>
   <div className="dashboard-header">
        <div className="header-content">
          <article className="main-title">AI Studio</article>
          <article className="subtitle">
           Experience AI video generation
          </article>
        </div>
        <h1 className="textHeader animate__animated animate__fadeInDown">
          Image to Video <span>AI Generation</span>
        </h1>
        <article className="subcar animate__animated animate__fadeInDown">
          Turn your ideas into stunning videos with AI
        </article>
      </div>
<ImageToVideoInput/>
      <div className="saveHistory">
        <h5>Previous Videos</h5>
        <article>No Videos yet</article>
      </div>
    </>
  )
}
