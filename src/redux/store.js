import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native

// import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
import rootReducer from './rootReducer'

const middleware = applyMiddleware(thunk);

const config = {
    key: 'root',
    storage,
    whitelist: ['dashboard'] // which reducer want to store

};

const reducers = persistCombineReducers(config, rootReducer);
const configureStore = () => {
    const store = createStore(reducers, middleware);
    const persistor = persistStore(store);
    return { persistor, store };
};

export default configureStore;
