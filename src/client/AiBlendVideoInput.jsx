"use client";
import React, { useState } from "react";

export default function AiBlendVideoInput() {
  const [isWriting, setIsWriting] = useState(false);
  const [value, setValue] = useState("");
  const [selectedMode, setSelectedMode] = useState("standard");
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = React.useRef(null);
   const [hasError, setHasError] = useState(false);

const durations = [{ id: "5s", label: "3-4 Seconds" }];
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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const remainingSlots = 3 - images.length;

    if (files.length > remainingSlots) {
      alert(`You can only upload ${remainingSlots} more image(s)`);
      return;
    }

    const newImages = files
      .slice(0, remainingSlots)
      .map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const remainingSlots = 3 - images.length;

    if (files.length > remainingSlots) {
      alert(`You can only upload ${remainingSlots} more image(s)`);
      return;
    }

    const newImages = files
      .slice(0, remainingSlots)
      .map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
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
        <div
          className={`upload-area ${isDragging ? "dragging" : ""}`}
          onClick={handleClick}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="upload-content">
            {/* Upload prompt (only shown when empty) */}
            {images.length === 0 && (
              <div className="upload-prompt">
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                <p>Click or drag images here (max 3)</p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              id="file-input"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
              multiple
              disabled={images.length >= 3}
            />

            {/* Image previews */}
            {images.length > 0 && (
              <div className="images-preview">
                {images.map((img, index) => (
                  <div key={index} className="image-preview-item">
                    <div className="image-container">
                      <img src={img} alt={`Preview ${index + 1}`} />
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(index);
                      }}
                      className="remove-button"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ))}
                {/* Empty slots */}
                {Array(3 - images.length)
                  .fill()
                  .map((_, i) => (
                    <div
                      key={`empty-${i}`}
                      className="image-preview-item empty-slot"
                    >
                      {images.length === 0 && i === 0 && (
                        <div className="empty-slot-content">
                          <i className="fa-solid fa-plus"></i>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="promtTxtarea">
        <h5 className="mt-4">Prompt</h5>
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
        Note: 5 credits are required for each 4s video generation.
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
