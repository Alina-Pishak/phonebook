export const handleFulfilledAuthUser = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

export const handleFulfilledLogoutUser = state => {
  state.token = '';
  state.profile = null;
};

export const handleFulfilledGetUser = (state, { payload }) => {
  state.profile = payload;
};
