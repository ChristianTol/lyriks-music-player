import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shamamCoreApi } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shamamCoreApi.reducerPath]: shamamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shamamCoreApi.middleware), 
});
