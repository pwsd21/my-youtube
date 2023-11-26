export const list = [
  "All",
  "Cricket",
  "Gaming",
  "Football",
  "Movies",
  "Kitchen",
  "Food",
  "Defense",
  "Hollywood",
  "Bollywood",
];

// Keep these types of things in .env file while deploying not here to to exposed
const GOOGLE_API_KEY = "AIzaSyD-SBEVr0jLEHMps-J0fIzysfic7UAlunM";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
