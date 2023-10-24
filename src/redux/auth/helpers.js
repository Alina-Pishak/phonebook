export const handleFulfilledAuthUser = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
};

export const handleFulfilledLogoutUser = state => {
  state.token = null;
  state.user = null;
};
