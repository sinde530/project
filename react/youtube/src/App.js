import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './componenets/header/Header';
import VideoList from './componenets/video_list/VideoList';

const Container = styled.div`
  max-width: 1280px;
}
`

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDWWV5WX-AMRqL57M4kde1ojyvrbMEH4O4',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);


  return (
    <Container>
      <Header />
      <VideoList videos={videos} />
    </Container>
  )

}

export default App;

// AIzaSyDWWV5WX - AMRqL57M4kde1ojyvrbMEH4O4