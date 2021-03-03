import { createSelector } from 'reselect';

const selectState = (state) => state.core;

export const getLoading = createSelector(selectState, (state) => state.loading);

export const getFigures = createSelector(selectState, (state) => state.figures);

export const getScene = createSelector(selectState, (state) => state.scene);

export const getMove = createSelector(selectState, (state) => state.isMove);

export const getRotate = createSelector(selectState, (state) => state.isRotate);

export const getCursor = createSelector(selectState, (state) => state.isCursor);

export const getSelectFigure = createSelector(selectState, (state) => state.selectFigure);


