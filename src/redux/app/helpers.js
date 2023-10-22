export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = state => {
  state.isLoading = false;
  state.error = true;
};
export const handleFulfilled = state => {
  state.isLoading = false;
};
