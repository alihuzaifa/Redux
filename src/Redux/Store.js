import { createStore, applyMiddleware } from 'redux'
import RootReducer from './RootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))

const persistor = persistStore(store)

export { store, persistor }