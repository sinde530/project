import React from "react";

function VideoItem(props) {
    // console.log(props.video.snippet.title)
    return <div>{props.video.snippet.title}</div>;
}

export default VideoItem;
