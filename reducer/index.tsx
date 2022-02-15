import { HYDRATE } from 'next-redux-wrapper';
import React from 'react';
import user, { initialState } from './user';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  index: (state = initialState, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { state, ...action.payload };
      default:
        return state;
    }
  },
  user,
});

export default rootReducer;
