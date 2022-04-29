import React from "react";

function VideoItem(props) {
    return (
        <div>
            <li>
                <img
                    src={props.video.snippet.thumbnails.medium.url}
                    alt="video thumbnail"
                />
                <div>
                    <p>{props.video.snippet.title}</p>
                    <p>{props.video.snippet.channelTitle}</p>
                </div>
            </li>
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
