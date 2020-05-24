import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import list1 from './list1';
import list2 from './list2';
import list3 from './list3';
import filter from './filter';
import date from './date';
import isSaving from './isSaving';

export default function createAppStore(history) {
    const middleware = [thunk, routerMiddleware(history)];
    let composeEnhancers = compose;

    if (process.env.NODE_ENV === 'development') {
        if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    }

    const enhancers = [];

    return createStore(
        combineReducers({
            list1,
            list2,
            list3,
            filter,
            date,
            isSaving,
            router: connectRouter(history)
        }),
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
};

export function getList3(state) {
    return state.list3;
}

export function getFilter(state) {
    return state.filter;
}

