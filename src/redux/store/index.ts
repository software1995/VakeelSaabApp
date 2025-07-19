import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import rootReducer from '../reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userBundleSlice',],
    // blacklist: ['sellerInfo', 'kycInfo', 'step','bankInfo', 'documentUpload', ], // <-- Add the slices you don't want to persist
    //   whitelist: ['userData',], // <-- Only persist 'sellerInfo' slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH,],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
