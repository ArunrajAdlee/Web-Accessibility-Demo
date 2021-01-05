import axios from 'axios';

export const server = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 0,
});

server.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = '7f5e173972da237e2045059438f6bde2'
  return config;
});

export const api = {
  get_list_nowPlaying: 'movie/now_playing',
  get_detail_movie: 'movie/',
};
