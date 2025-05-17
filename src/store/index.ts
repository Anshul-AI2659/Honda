import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Redux/Slices';
import { persistReducer, persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const authInterceptor = (storeAPI) => (next) => (action) => {
  if (
    action?.payload !== undefined &&
    action.payload !== null &&
    action.payload?.statusCode === 401
  ) {
    // Handle unauthorized access
  } else {
    return next(action);
  }
};

const logger = __DEV__ ? createLogger() : undefined;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({ serializableCheck: false }).concat(authInterceptor);
    if (__DEV__ && logger) {
      middlewares.push(logger);
    }
    return middlewares;
  },
  preloadedState: {},
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
