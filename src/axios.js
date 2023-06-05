import axios from 'axios';

const API_KEY = 'b769d525e1ad4eef01b48a7fe3c818d0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchMoviesData = async (searchParams = '/trending/movie/day') => {
  const response = await axios.get(searchParams, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};
