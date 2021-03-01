import {
  LOADING_FALSE,
  LOADING_TRUE,
} from '../../constants/actionTypes';


export const loadingTrue = () => ({
  type: LOADING_TRUE,
});

export const loadingFalse = () => ({
  type: LOADING_FALSE,
});
