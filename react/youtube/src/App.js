import { useEffect, useState } from 'react';
import './App.css';
import VideoList from './componenets/video_list/VideoList';

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
    <>
      <VideoList videos={videos} />
    </>
  )

}

export default App;

// AIzaSyDWWV5WX - AMRqL57M4kde1ojyvrbMEH4O4