class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mostPopular() {
        const response = await fetch(
            // 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDWWV5WX-AMRqL57M4kde1ojyvrbMEH4O4',
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items;
    }

    async search(query) {
        const response = await fetch(
            // `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYn09ySlShmzBtYwl1OgOsA&maxResults=25&q=&(query)&type=video&key=AIzaSyDWWV5WX-AMRqL57M4kde1ojyvrbMEH4O4`,
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYn09ySlShmzBtYwl1OgOsA&maxResults=25&q=&(query)&type=video&key=${this.key}`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;
