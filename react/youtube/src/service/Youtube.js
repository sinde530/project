class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    mostPopular() {
        return fetch(
            // 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDWWV5WX-AMRqL57M4kde1ojyvrbMEH4O4',
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getRequestOptions
        )
            .then(response => response.json())
            .then(result => result.items);
    }

    search(query) {
        return fetch(
            // `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYn09ySlShmzBtYwl1OgOsA&maxResults=25&q=&(query)&type=video&key=AIzaSyDWWV5WX-AMRqL57M4kde1ojyvrbMEH4O4`,
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYn09ySlShmzBtYwl1OgOsA&maxResults=25&q=&(query)&type=video&key=${this.key}`,
            this.getRequestOptions
        )
            .then(response => response.json())
            .then(result =>
                result.items.map(item => ({ ...item, id: item.id.videoId }))
            );
    }
}

export default Youtube;
