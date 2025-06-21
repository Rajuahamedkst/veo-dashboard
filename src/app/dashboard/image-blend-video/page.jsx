
import AiBlendVideoInput from '@/client/AiBlendVideoInput'
import React from 'react'

export default function ImageBlendVideo() {
  return (
    <>
   <div className="dashboard-header">
        <div className="header-content">
          <article className="main-title">AI Studio</article>
          <article className="subtitle">Discover AI power video effects</article>
        </div>
        <h1 className="textHeader animate__animated animate__fadeInDown">
          Image Blend Video <span>AI Animation</span>
        </h1>
        <article className="subcar animate__animated animate__fadeInDown">
          Transform your static images into dynamic videos with AI
        </article>
      </div>
  <AiBlendVideoInput/>
      <div className="saveHistory">
        <h5>Previous Videos</h5>
        <article>No Videos yet</article>
      </div>
    </>
  )
}
