import axios from 'axios';

export const FETCH_VIDEO_GAMES_REQUEST = 'FETCH_VIDEO_GAMES_REQUEST';
export const FETCH_VIDEO_GAMES_SUCCESS = 'FETCH_VIDEO_GAMES_SUCCESS';
export const FETCH_VIDEO_GAMES_FAILURE = 'FETCH_VIDEO_GAMES_FAILURE';

export const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';

export const SEARCH_VIDEOGAMES_REQUEST = 'SEARCH_VIDEOGAMES_REQUEST';
export const SEARCH_VIDEOGAMES_SUCCESS = 'SEARCH_VIDEOGAMES_SUCCESS';
export const SEARCH_VIDEOGAMES_FAILURE = 'SEARCH_VIDEOGAMES_FAILURE';

export const fetchVideoGames = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_VIDEO_GAMES_REQUEST });

    try {
      const response = await axios.get('/api/videoGames');
      const data = response.data;
      dispatch({ type: FETCH_VIDEO_GAMES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_VIDEO_GAMES_FAILURE, error: error.message });
    }
  };
};

export const fetchGenres = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_GENRES_REQUEST });

    try {
      const response = await axios.get('/api/genres');
      const genres = response.data;
      dispatch({ type: FETCH_GENRES_SUCCESS, payload: genres });
    } catch (error) {
      dispatch({ type: FETCH_GENRES_FAILURE, error: error.message });
    }
  };
};

export const searchVideoGames = (query) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_VIDEOGAMES_REQUEST });

    try {
      const response = await axios.get(`/api/videogames?q=${query}`);
      const searchResults = response.data;
      dispatch({ type: SEARCH_VIDEOGAMES_SUCCESS, payload: searchResults });
    } catch (error) {
      dispatch({ type: SEARCH_VIDEOGAMES_FAILURE, error: error.message });
    }
  };
};
