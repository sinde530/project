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
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      // `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYn09ySlShmzBtYwl1OgOsA&maxResults=25&q=&(query)&type=video&key=AIzaSyDWWV5WX-AMRqL57M4kde1ojyvrbMEH4O4`,
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYn09ySlShmzBtYwl1OgOsA&maxResults=25&q=&(query)&type=video&key=AIzaSyCJF8G403dCY-xYYxr3Tp1_B_SF-hWYj_A`,
      requestOptions
    )
      .then(response => response.json())
      .then(result =>
        result.items.map(item => ({ ...item, id: item.id.videoId }))
      )
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      // 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDWWV5WX-AMRqL57M4kde1ojyvrbMEH4O4',
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCJF8G403dCY-xYYxr3Tp1_B_SF-hWYj_A',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
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