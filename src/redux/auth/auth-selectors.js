export const selectAuthLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selectIsLogin = state => state.auth.isLogin;
export const selectIsToken = state => state.auth.token;
export const selectUser = state => state.auth.user;