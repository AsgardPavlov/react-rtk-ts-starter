import {combineReducers, configureStore} from '@reduxjs/toolkit';
import Auth from './auth/reducer';

const rootReducer = combineReducers({
    auth: Auth,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
