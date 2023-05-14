import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

export const selectBirdList = createSelector(
    (state: RootState) => state.birdList,
    (birdList) => birdList
);
