"use client";
import React, { useState } from "react";
import man from "../../public/thumbnails/man.png";
import Image from "next/image";

const videos = [
  {
    id: 1,
    videoFile: "/videos/man.mp4",
    thumbnail: "/thumbnails/chief.png",
  },
  {
    id: 2,
    videoFile: "/videos/chief.mp4",
    thumbnail: "/thumbnails/chief.png",
  },
  // Add at least 3 more videos to see the grid properly
  {
    id: 3,
    videoFile: "/videos/women.mp4",
    thumbnail: "/thumbnails/women.png",
  },
  {
    id: 4,
    videoFile: "/videos/cat.mp4",
    thumbnail: "/thumbnails/cat.png",
  },
  {
    id: 5,
    videoFile: "/videos/mountain.mp4",
    thumbnail: "/thumbnails/mountain.png",
  },
  {
    id: 6,
    videoFile: "/videos/monkey.mp4",
    thumbnail: "/thumbnails/monkey.png",
  },
  {
    id: 7,
    videoFile: "/videos/man.mp4",
    thumbnail: "/thumbnails/chief.png",
  },
  {
    id: 8,
    videoFile: "/videos/chief.mp4",
    thumbnail: "/thumbnails/chief.png",
  },
  // Add at least 3 more videos to see the grid properly
  {
    id: 9,
    videoFile: "/videos/women.mp4",
    thumbnail: "/thumbnails/women.png",
  },
  {
    id: 10,
    videoFile: "/videos/cat.mp4",
    thumbnail: "/thumbnails/cat.png",
  },
  {
    id: 11,
    videoFile: "/videos/mountain.mp4",
    thumbnail: "/thumbnails/mountain.png",
  },
  {
    id: 12,
    videoFile: "/videos/monkey.mp4",
    thumbnail: "/thumbnails/monkey.png",
  },
];

export default function AiToVideoInput() {
  const [isWriting, setIsWriting] = useState(false);
  const [value, setValue] = useState("");
  const [selectedMode, setSelectedMode] = useState("standard");
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = React.useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const durations = [
    { id: "5s", label: "5 Seconds" },
    { id: "8s", label: "8 Seconds" },
    { id: "10s", label: "10 Seconds" },
  ];

 const aspectratio = [
  { id: "1", label: "16:9", width: 35, height: 20 },
  { id: "2", label: "1:1", width: 20, height: 20 },
  { id: "3", label: "9:16", width: 20, height: 35 }
]; 
  const handleChange = (e) => {
    setValue(e.target.value);
    setIsWriting(e.target.value.length > 0);
  };

  const clearTextarea = () => {
    setValue("");
    setIsWriting(false);
  };

  const clearAll = () => {
    setValue("");
    setIsWriting(false);
    // Add your video clearing logic here later
    // For example: setVideoUrl(null);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImage(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImage(file);
    }
  };

  const handleImage = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <>
          <div className="txtToVideo-container">
        <div className="input-text-corner">
      <h5>Input Section</h5>
      <div className="exampleClrBtn">
        <button onClick={clearAll}>
          <i className="fa-solid fa-xmark me-2"></i>Clear All
        </button>
        <button>
          <i className="fa-solid fa-wand-magic-sparkles me-2"></i>Example
        </button>
      </div>
      <div className="upload-container mt-3 mb-3">
        {!image ? (
          <div
            className={`upload-area ${isDragging ? "dragging" : ""}`}
            onClick={handleClick}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="upload-content">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              <p>Click or drag image here</p>
              <input
                ref={fileInputRef}
                type="file"
                id="file-input"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
              />
            </div>
          </div>
        ) : (
          <div className="image-preview">
            <img src={image} alt="Preview" />
            <button onClick={removeImage} className="remove-button">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        )}
      </div>

      <div className="aieffects">
        <h5>Effects Example</h5>
        <div
          className="exampleEffectCorner"
          onClick={toggleModal}
          style={{ cursor: "pointer" }}
        >
          <div className="imageAndTexts">
            <Image src={man} alt="man-smiling" height={50} width={50} />
            <article>A Man Is carrying Frayer</article>
          </div>
          <i className="fa-solid fa-palette"></i>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              {/* Close button */}
              <button onClick={toggleModal} className="close-button">
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="modal-grid-container">
                <div className="modal-grid">
                  {videos.map((video) => (
                    <div key={video.id} className="modal-card video-card">
                      <video
                        width="100%"
                        height="100%"
                        poster={video.thumbnail}
                        onClick={(e) =>
                          e.currentTarget.paused
                            ? e.currentTarget.play()
                            : e.currentTarget.pause()
                        }
                        muted
                        loop
                      >
                        <source src={video.videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <h5>Prompt</h5>
      <div className="promtTxtarea">
        <textarea
          className={isWriting ? "writing" : ""}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsWriting(true)}
          onBlur={() => setIsWriting(value.length > 0)}
          placeholder="Enter your prompt here..."
        />
      </div>

      <div className="exampleClrBtn clrpromtButton">
        <button onClick={clearTextarea}>
          <i className="fa-solid fa-xmark me-2"></i>Clear
        </button>
        <button>
          <i className="fa-solid fa-wand-magic-sparkles me-2"></i>Enhance
        </button>
      </div>
      <div className="videoModes">
        <h5>Mode</h5>
        <div className="videoMakeMode">
          <div className="modemakerHeading">
            {/* Standard Option */}
            <label className="standrad">
              <input
                type="radio"
                name="videoMode"
                value="standard"
                className="mode-radio"
                defaultChecked
              />
              <div className="icons">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <div className="modeText">
                <h6>Standard</h6>
                <article>1 Cradit</article>
              </div>
            </label>

            {/* High Option */}
            <label className="highMode">
              <input
                type="radio"
                name="videoMode"
                value="high"
                className="mode-radio"
              />
              <div className="icons">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <div className="modeText">
                <h6>High</h6>
                <article>5 Cradit</article>
              </div>
            </label>

            {/* Ultra Option */}
            <label className="ultraMode">
              <input
                type="radio"
                name="videoMode"
                value="ultra"
                className="mode-radio"
              />
              <div className="icons">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <div className="modeText">
                <h6>Ultra</h6>
                <article>10 Cradit</article>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="videoMakeMode">
        <h5>Duration</h5>
        <div className="modeRadioButton">
          {durations.map((duration) => (
            <div key={duration.id} className="radioOption">
              <input
                type="radio"
                id={duration.id}
                name="videoQuality"
                value={duration.id}
                checked={selectedMode === duration.id}
                onChange={() => setSelectedMode(duration.id)}
              />
              <label htmlFor={duration.id}>
                <span className="modeLabel">{duration.label}</span>
                <span className="modeCredits">{duration.credits}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    <div className="aspect-ratio">
  <h6>Aspect Ratio</h6>
  <div className="ratio-container">
    {aspectratio.map((ratio, index) => (
      <label key={ratio.id} className={`ratio${index + 1}`}>
        <input 
          type="radio" 
          name="aspectRatio" 
          value={ratio.label} 
          className="ratio-radio"
          defaultChecked={index === 0}
        />
        <div 
          className={`ratioshow${index + 1}`}
          style={{
            width: `${ratio.width}px`,
            height: `${ratio.height}px`
          }}
        ></div>
        <div className="ratioTxt">
          <article>{ratio.label}</article>
        </div>
      </label>
    ))}
  </div>
</div>
      <div className="togglebtn mt-2 mb-2">
        <label className="toggle">
          <input className="toggle-checkbox" type="checkbox" />
          <div className="toggle-switch"></div>
          <span className="toggle-label">Email Notification</span>
        </label>

        <hr />
      </div>
      <div className="generateVideoButton">
        <button>
          <i className="fa-solid fa-wand-magic-sparkles me-2"></i>Generate Video
          (1 Cradit)
        </button>
      </div>
      <article className="creditnote">
        Note: 1 credits are required for each 5s video generation.
      </article>
        </div>
        <div className="output-corner">
       <div className="app-container">
      <div className="video-player-container">
        {hasError ? (
          <div className="video-placeholder">
            Failed to load video
          </div>
        ) : (
          <video
            controls
            className="video-player"
            onError={() => setHasError(true)}
          >
            <source src="/videos/chief.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
        </div>
      </div>
     
    </>
  );
}
