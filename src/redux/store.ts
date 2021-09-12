import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import rootReducer from './root-reducer';

const middilewares = [logger];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middilewares)));

export default store;