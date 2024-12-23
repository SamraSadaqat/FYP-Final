import React from "react";
import ReactPlayer from "react-player/lazy";

const VideoPlayer = (props) => {
  return (
    <>
      <ReactPlayer {...props} />
    </>
  );
};

export default VideoPlayer;
