export const isAuthenticatedSelector = (state) => state.user.token !== undefined;
export const userSelector = (state) => state.user;
