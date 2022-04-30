import styled from "@emotion/styled";
import React from "react";
import styles from './item.module.css';

const Container = styled.div`
    padding: 0.2rem;
`

const Video = styled.li`
    width: 100%;
    height:100%;
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


function VideoItem({ video, video: { snippet }, onVideoClick, display }) {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
        <Container
            className={`${styles.container} ${displayType}`}
            onClick={() => onVideoClick(video)}
        >
            <Video>
                <Thumbnails
                    src={snippet.thumbnails.medium.url}
                    alt="video thumbnail"
                />
                <MetaData>
                    <Title>{snippet.title}</Title>
                    <Channel>{snippet.channelTitle}</Channel>
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
