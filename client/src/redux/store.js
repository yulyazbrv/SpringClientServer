import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './slices/projectsSlice';
import userCredentialReducer from './slices/userCredentialsSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    user: userCredentialReducer,
    projects: projectsReducer,
    auth: authReducer,
  },
});
