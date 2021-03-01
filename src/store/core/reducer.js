import {
  LOADING_TRUE,
  LOADING_FALSE,
} from '../../constants/actionTypes/';


const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOADING_TRUE:
      return {
        ...state, loading: true,
      };
    case LOADING_FALSE:
      return {
        ...state, loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
