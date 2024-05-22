import { combineReducers } from 'redux';
import {
  SEARCH_VIDEOGAMES_REQUEST,
  SEARCH_VIDEOGAMES_SUCCESS,
  SEARCH_VIDEOGAMES_FAILURE
} from './actions';

const initialState = {
  loading: false,
  data: [],
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VIDEOGAMES_REQUEST:
      return { ...state, loading: true };
    case SEARCH_VIDEOGAMES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case SEARCH_VIDEOGAMES_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  data: dataReducer
});

export default rootReducer;
