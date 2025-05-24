// components/VideoWithFallback.jsx
import { useState } from "react";

const VideoWithFallback = ({ videoSrc, fallbackImg, overlayText = "", className = "" }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoPlay = () => {
    setVideoLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!videoLoaded && (
        <img
          src={fallbackImg}
          alt="Fallback"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md z-0"
        />
      )}
      <video
        src={videoSrc}
        className="object-cover w-full h-full border rounded-md z-10"
        autoPlay
        loop
        muted
        playsInline
        
        onPlaying={handleVideoPlay}
      />
      {overlayText && (
        <div className="absolute bottom-4 right-4  text-white text-4xl px-2 py-1 rounded-md z-20">
          {overlayText}
        </div>
      )}
    </div>
  );
};

export default VideoWithFallback;
