import { createSelector } from 'reselect';

const selectState = (state) => state.core;

export const getLoading = createSelector(selectState, (state) => state.loading);



