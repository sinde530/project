import styled from "@emotion/styled";
import React from "react";
import VideoItem from "../video_item/VideoItem";

const Videos = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
`

function VideoList(props) {
    return (
        <Videos>
            {props.videos.map(video => (
                <VideoItem key={video.id} video={video} />
            ))}
        </Videos>
    )
}

export default VideoList;
