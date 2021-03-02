import {
  LOADING_TRUE,
  LOADING_FALSE,
  ADD_CUBES,
  ADD_CIRCLE,
  ADD_TRIANGLE,
} from '../../constants/actionTypes';
import * as THREE from "three";

const geometryBox = new THREE.BoxGeometry()
const geometryCircle = new THREE.SphereGeometry()
const geometryTriangle = new THREE.ConeGeometry()
const material = new THREE.MeshPhongMaterial({ color: 0x0000ff, transparent: true })

const INITIAL_STATE = {
  loading: false,
  //max-cubes-18
  figures: [new THREE.Mesh(geometryBox, material)],
  scene: new THREE.Scene(),
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
    case ADD_CUBES:
      return {
        ...state,
        figures: state.figures.concat([new THREE.Mesh(geometryBox, material)]),
      };
    case ADD_CIRCLE:
      return {
        ...state,
        figures: state.figures.concat([new THREE.Mesh(geometryCircle, material)]),
      };
    case ADD_TRIANGLE:
      return {
        ...state,
        figures: state.figures.concat([new THREE.Mesh(geometryTriangle, material)]),
      };
    default:
      return {
        ...state,
      };
  }
};
