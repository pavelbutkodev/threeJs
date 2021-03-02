import {
  LOADING_FALSE,
  LOADING_TRUE,
  ADD_CUBES,
  ADD_CIRCLE,
  ADD_TRIANGLE,
  IS_MOVE,
  IS_ROTATE,
} from '../../constants/actionTypes';


export const loadingTrue = () => ({
  type: LOADING_TRUE,
});

export const loadingFalse = () => ({
  type: LOADING_FALSE,
});

export const addCubes = () => ({
  type: ADD_CUBES,
});

export const addCircle = () => ({
  type: ADD_CIRCLE,
});

export const addTriangle = () => ({
  type: ADD_TRIANGLE,
});

export const changeMoveFlag = () => ({
  type: IS_MOVE,
});

export const changeRotateFlag = () => ({
  type: IS_ROTATE,
});