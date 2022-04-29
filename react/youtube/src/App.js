import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './componenets/header/Header';
import VideoList from './componenets/video_list/VideoList';

const Container = styled.div`
  max-width: 1280px;
}
`

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube.search(query)
      .then(videos => setVideos(videos));
  }

  useEffect(() => {
    youtube.mostPopular()
      .then(videos => setVideos(videos));
  }, []);



  return (
    <Container>
      <Header onSearch={search} />
      <VideoList videos={videos} />
    </Container>
  )

}

export default App;

// AIzaSyDWWV5WX - AMRqL57M4kde1ojyvrbMEH4O4