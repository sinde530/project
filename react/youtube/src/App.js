import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './componenets/header/Header';
import VideoDetail from './componenets/video_detail/VideoDetail';
import VideoList from './componenets/video_list/VideoList';

const Container = styled.div`
  max-width: 1280px;
}
`
const Content = styled.div`
  display: flex;
}
`
const Detail = styled.div`
  flex: 1 1 70%
}
`
const List = styled.div`
  flex: 1 1 30%
}
`

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const SelectedVideo = (video) => {
    setSelectedVideo(video);
  }

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
      <Content>
        {selectedVideo && (<Detail>
          <VideoDetail video={selectedVideo} />
        </Detail>
        )}
        <List>
          <VideoList
            videos={videos}
            onVideoClick={SelectedVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </List>
      </Content>
    </Container>
  )

}

export default App;

// AIzaSyDWWV5WX - AMRqL57M4kde1ojyvrbMEH4O4