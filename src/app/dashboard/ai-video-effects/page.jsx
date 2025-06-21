
import AiToVideoInput from '@/client/AiToVideoInput'
import React from 'react'

export default function AiVideoEffects() {
  return (
    <>
   <div className="dashboard-header">
        <div className="header-content">
          <article className="main-title">AI Studio</article>
          <article className="subtitle">Discover AI power video effects</article>
        </div>
        <h1 className="textHeader animate__animated animate__fadeInDown">
          Stunning AI Video <span>Effects Collection</span>
        </h1>
        <article className="subcar animate__animated animate__fadeInDown">
          Apply AI-powered effects to your videos
        </article>
      </div>
    <AiToVideoInput/>
      <div className="saveHistory">
        <h5>Previous Videos</h5>
        <article>No Videos yet</article>
      </div>
    </>
  )
}
