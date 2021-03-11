import {
  LOADING_TRUE,
  LOADING_FALSE,
  ADD_CUBES,
  ADD_CIRCLE,
  ADD_TRIANGLE,
  IS_MOVE,
  IS_ROTATE,
  SELECT_FIGURE,
  IS_CURSOR,
} from '../../constants/actionTypes';
import * as THREE from "three";
import { ICreateFigure, IReducer } from "./types";

//square
const square = new THREE.Shape();
square.moveTo(2, 2);
square.lineTo(2, -2);
square.lineTo(-2, -2);
square.lineTo(-2, 2);
const squareBox = new THREE.ShapeGeometry(square);

//circle
const x: number = 0;
const y = 0;
const radius = 2;
const circle = new THREE.Shape();
circle.absarc(x, y, radius, 1, 7, false);
const geometryCircle = new THREE.ShapeGeometry(circle, 50);

//triangle
const triangle = new THREE.Shape();
triangle.moveTo(0, 0);
triangle.lineTo(2, -2);
triangle.lineTo(-2, -2);
triangle.lineTo(-2, 2);
const geometryTriangle = new THREE.ShapeGeometry(triangle, 11);

//material
const material = new THREE.MeshPhongMaterial({emissive: 'rgb(0, 0, 0)'})

const INITIAL_STATE = {
  loading: false,
  figures: [],
  scene: new THREE.Scene(),
  isMove: false,
  isRotate: false,
  isCursor: false,
  selectFigure: null,
};

const createFigure = ({figures, figure}: ICreateFigure) => {
  return figures.concat([new THREE.Mesh(figure, material)])
}

const coreReducer = (state = INITIAL_STATE, {type, payload}: IReducer) => {
  switch (type) {
    case LOADING_TRUE:
      return {
        ...state, loading: true,
      };
    case LOADING_FALSE:
      return {
        ...state, loading: false,
      };
    case ADD_CUBES:
      return {
        ...state,
        figures: createFigure({figures: state.figures, figure: squareBox})
      };
    case ADD_CIRCLE:
      return {
        ...state,
        figures: createFigure({figures: state.figures, figure: geometryCircle})
      };
    case ADD_TRIANGLE:
      return {
        ...state,
        figures: createFigure({figures: state.figures, figure: geometryTriangle})
      };
    case IS_MOVE:
      return {
        ...state, isMove: !state.isMove,
      };
    case IS_ROTATE:
      return {
        ...state, isRotate: !state.isRotate,
      };
    case IS_CURSOR:
      return {
        ...state, isCursor: !state.isCursor,
      };
    case SELECT_FIGURE:
      return {
        ...state, selectFigure: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default coreReducer;
