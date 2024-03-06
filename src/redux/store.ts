import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import quoteSlice from './quoteSlice'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    version: 1
}

const reducers = combineReducers({
    quote: quoteSlice
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)