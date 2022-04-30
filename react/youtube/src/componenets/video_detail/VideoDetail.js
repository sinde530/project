import React from "react";

function VideoDetail({ video }) {
    return (
        <div>
            <h1>{video.snippet.title}</h1>
        </div>
    )
}

export default VideoDetail;
