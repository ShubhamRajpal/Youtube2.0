export const GOOGLE_API_KEY = "AIzaSyDEsjFsxhLRoQD1Qj72Af0wHhvrR8C6ryU";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_KEYWORD_SEARCH =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";
