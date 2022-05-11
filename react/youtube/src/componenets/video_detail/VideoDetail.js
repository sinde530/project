import React from 'react';
import styles from './video_detail_module.css';

function VideoDetail({ video }) {
  return (
    <div className={styles.detail}>
      <iframe
        title="video"
        className={styles.video}
        type="text/html"
        width="100%"
        height="505"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <h1>{video.snippet.title}</h1>
    </div>
  );
}

export default VideoDetail;
