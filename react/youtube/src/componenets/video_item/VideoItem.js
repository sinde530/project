import styled from "@emotion/styled";
import React from "react";

const Video = styled.li`
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    margin-bottom: 1rem;
    transition: transform 250ms ease-in;
    cursor: pointer;
    &:hover{
        transform: scale(1.02);
    }
`
const Thumbnails = styled.img`
    width: 40%;
`
const Title = styled.p`
    margin: 0;
`
const Channel = styled.p`
    margin: 0;
    font-size: 0.9rem;
`


function VideoItem(props) {
    return (
        <div>
            <Video>
                <Thumbnails
                    src={props.video.snippet.thumbnails.medium.url}
                    alt="video thumbnail"
                />
                <div>
                    <Title>{props.video.snippet.title}</Title>
                    <Channel>{props.video.snippet.channelTitle}</Channel>
                </div>
            </Video>
        </div>
    )
}
// function VideoItem({ video: { snippet } }) {
//     return (
//         <div>
//             <li>
//                 <img
//                     src={snippet.thumbnails.medium.url}
//                     alt="video thumbnail"
//                 />
//                 <div>
//                     <p>{snippet.title}</p>
//                     <p>{snippet.channelTitle}</p>
//                 </div>
//             </li>
//         </div>
//     )
// }

export default VideoItem;
