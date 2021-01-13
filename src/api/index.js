import axios from "axios";

const KEY = process.env.VUE_APP_API_KEY;
const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
const params = {
  maxResults: 20,
  key: KEY,
  regionCode: "JP",
  type: "video"
};

export const fetchPopularData = async () => {
  return await youtube.get("videos", {
    params: {
      ...params,
      part: "statistics,snippet",
      chart: "mostPopular"
    }
  });
};

export const fetchSelectedData = async id => {
  return await youtube.get("videos", {
    params: {
      ...params,
      part: "statistics,snippet",
      id
    }
  });
};

export const fetchRelatedData = async id => {
  return await youtube.get("search", {
    params: {
      ...params,
      part: "snippet",
      relatedToVideoId: id
    }
  });
};

export const fetchSearchedData = async query => {
  return await youtube.get("search", {
    params: {
      ...params,
      part: "snippet",
      q: query
    }
  });
};
