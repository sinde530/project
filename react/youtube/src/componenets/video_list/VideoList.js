import React from "react";
import VideoItem from "../video_item/VideoItem";

function VideoList(props) {
    return (
        <ul>
            {props.videos.map(video => (
                <VideoItem key={video.id} video={video} />
            ))}
        </ul>
    )
}

export default VideoList;
