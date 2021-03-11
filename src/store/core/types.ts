import {BufferGeometry, Mesh, Scene} from "three";

export interface ICore {
  loading: Boolean,
  figures: Mesh[],
  scene: Scene,
  isMove: Boolean,
  isRotate: Boolean,
  isCursor: Boolean,
  selectFigure: Mesh | null,
}

export interface IState {
  core: ICore
}

export interface IReducer {
  type: string
  payload: Mesh
}

export interface ICreateFigure {
  figures: Mesh[]
  figure: BufferGeometry
}
