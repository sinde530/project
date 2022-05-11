import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  padding: 0.2em;
`;
const Video = styled.iframe`
  display: flex;
  border: 0;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

function VideoDetail({ video: { snippet }, video }) {
  return (
    <Container>
      <Video
        title="video"
        type="text/html"
        width="100%"
        height="505"
        src={`https://www.youtube.com/embed/${video.id}`}
        // frameborder="0"
        allowfullscreen
      ></Video>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre>{snippet.description}</pre>
    </Container>
  );
}

export default VideoDetail;
