import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { sagaWatcher } from "../saga";
const sagaMiddleware = createSagaMiddleware()

export const Store=configureStore({
    reducer:rootReducer,
    middleware:[sagaMiddleware,logger]
})



sagaMiddleware.run(sagaWatcher)

