import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '666b8461a61091018ee72bff00f403d7',
    language: 'ko',
  },
});

export const tvapi = {
  //  /movie/now_playing 처럼 movie앞에 /(슬래시)를 넣으면, 절대경로가 되어서 기존 url을 덮어쓰기하게 된다.
  //  그러니 꼭!! /(슬래시)가 없는 상대경로로 설정하기!!
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_responseZ: 'videos',
      },
    }),
  search: term =>
    api.get('search/movie', {
      params: {
        quert: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: id => api.get(`tv/${id}`),
  search: term =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
