import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-header">
        <div className="header-content">
          <article className="main-title">AI Studio</article>
          <article className="subtitle">
            Discover trending AI video tools
          </article>
        </div>
        <h1 className="textHeader animate__animated animate__fadeInDown">
          AI Video <span>Studio</span>
        </h1>
        <article className="subcar animate__animated animate__fadeInDown">
          Create amazing videos with AI using our powerful tools
        </article>
      </div>
      <div className="gridCategorys">
        <Link href="/text-to-video">
          <div className="cards">
            <div className="cartheader">
              <article>
                <i className="fa-solid fa-video pe-3"></i>Text to Video
              </article>
            </div>
            <article className="sub-head">
              Generate videos from text descriptions
            </article>
          </div>
        </Link>
        <Link href="/image-to-video">
          <div className="cards">
            <div className="cartheader">
              <article>
                <i className="fa-solid fa-video pe-3"></i>Image to Video
              </article>
            </div>
            <article className="sub-head">
              Transform images into dynamic videos
            </article>
          </div>
        </Link>
        <Link href="ai-video-effects">
          <div className="cards">
            <div className="cartheader">
              <article>
                <i className="fa-solid fa-video pe-3"></i>AI Video Effects
              </article>
            </div>
            <article className="sub-head">
              Apply AI-powered effects to your videos
            </article>
          </div>
        </Link>
        <Link href="veo-3">
          <div className="cards">
            <div className="cartheader">
              <article>
                <i className="fa-solid fa-video pe-3"></i>Veo 3
              </article>
            </div>
            <article className="sub-head">
              Generate videos with realistic sound
            </article>
          </div>
        </Link>
      </div>

    </>
  );
}
