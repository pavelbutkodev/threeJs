import { createSelector } from 'reselect';

const selectState = (state) => state.core;

export const getLoading = createSelector(selectState, (state) => state.loading);

export const getFigures = createSelector(selectState, (state) => state.figures);

export const getScene = createSelector(selectState, (state) => state.scene);


