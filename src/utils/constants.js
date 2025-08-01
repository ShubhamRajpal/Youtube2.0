export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${process.env.REACT_APP_YOUTUBEAPI_KEY}`;

export const VIDEO_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&key=${process.env.REACT_APP_YOUTUBEAPI_KEY}&id=`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_KEYWORD_SEARCH =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";

export const COMMENTSTHREADS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=100&key=" +
  process.env.REACT_APP_YOUTUBEAPI_KEY;

export const CHANNELS_API_URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_YOUTUBEAPI_KEY}&id=`;
