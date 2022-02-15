export const initialState = {
  user: {
    isLogin: false,
  },
};

export const CHANGE_LOGIN = 'CHANGE_LOGIN';

export const loginAction = (data: boolean) => {
  return {
    type: CHANGE_LOGIN,
    data,
  };
};

const reducer = (state = initialState, action: { type: any; data: any }) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    default:
      return state;
  }
};

export default reducer;
