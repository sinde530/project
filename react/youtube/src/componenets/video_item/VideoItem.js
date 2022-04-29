import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
    width: 50%;
    padding: 0.2rem;
`

const Video = styled.li`
    width: 50%;
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    transition: transform 250ms ease-in;
    box-shadow: 3px 3px 5px 0px rgba(191,191,191,0.53);
    cursor: pointer;
    &:hover{
        transform: scale(1.02);
    }
`
const Thumbnails = styled.img`
    width: 40%;
    height: 100%
`
const MetaData = styled.div`
    margin-left: 0.4rem;
`
const Title = styled.p`
    margin: 0;
    font-size: 0.8rem;
`
const Channel = styled.p`
    margin: 0;
    font-size: 0.9rem;
    font-size: 0.6rem;
`


function VideoItem(props) {
    return (
        <Container>
            <Video>
                <Thumbnails
                    src={props.video.snippet.thumbnails.medium.url}
                    alt="video thumbnail"
                />
                <MetaData>
                    <Title>{props.video.snippet.title}</Title>
                    <Channel>{props.video.snippet.channelTitle}</Channel>
                </MetaData>
            </Video>
        </Container>
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
