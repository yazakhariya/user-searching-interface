import { configureStore } from '@reduxjs/toolkit'
import { gitApi } from './api'

export const store = configureStore({
    reducer: {
        [gitApi.reducerPath]: gitApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gitApi.middleware),
});
