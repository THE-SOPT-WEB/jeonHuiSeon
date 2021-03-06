import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://dapi.kakao.com/v2/local/',
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
  },
});
