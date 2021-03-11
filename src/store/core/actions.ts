import {
  LOADING_FALSE,
  LOADING_TRUE,
  ADD_CUBES,
  ADD_CIRCLE,
  ADD_TRIANGLE,
  IS_MOVE,
  IS_ROTATE,
  SELECT_FIGURE,
  IS_CURSOR,
} from '../../constants/actionTypes';
import { Mesh } from "three";

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

export const changeCursorFlag = () => ({
  type: IS_CURSOR,
});

export const selectFigure = (figure: Mesh) => ({
  type: SELECT_FIGURE,
  payload: figure,
});

