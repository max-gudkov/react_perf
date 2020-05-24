import { createSelector } from 'reselect';

import service from '../api/service';
import { getList3, getFilter } from './createStore';

// action types

export const LOAD_LIST3 = 'LOAD_LIST3';
export const TOGGLE_TODO3 = 'TOGGLE_TODO3';

// action creators

export function loadList(count) {
    return dispatch => {
        return service.request(fakeData(count)).then(data => {
            return dispatch({ type: LOAD_LIST3, payload: data });
        });
    };
};

export function toggleTodo(id, isDone) {
    return dispath => {
        return service.request({ id, isDone }).then(data => {
            return dispath({ type: TOGGLE_TODO3, payload: data });
        });
    };
};

// reducers

const initialState = {
    ids: [],
    values: {},
    names: {}
};

export default function list3(state = initialState, action) {
    if (action.type === LOAD_LIST3) {
        const list = action.payload;
        const ids = [];
        const values = {};
        const names = {};

        list.forEach(item => {
            ids.push(item.id);
            values[item.id] = { id: item.id, isDone: item.isDone };
            names[item.id] = { id: item.id, name: item.name };
        });

        return { ids, values, names };
    }
    if (action.type === TOGGLE_TODO3) {
        const { id, isDone } = action.payload.id;
        const item = state.values[id];

        return {
            ...state,
            values: {
                ...state.values,
                [id]: { ...item, isDone }
            }
        };
    }
    return state;
};

// selectors

function getItemsIds(state) {
    return getList3(state).ids;
}

function getValues(state) {
    return getList3(state).values;
}

function getNames(state) {
    return getList3(state).names;
}

export function getItemNameById(state, id) {
    return getList3(state).names[id].name;
}

export function getItemIsDoneById(state, id) {
    return getValues(state)[id].isDone;
}

export const getFilteredIds = createSelector(
    getItemsIds,
    getNames,
    getFilter,
    ///
    (ids, names, filter) => {
        return ids.filter(id => names[id].name.includes(filter));
    }
);

///

function fakeData(count) {
    let result = [];

    for (let i = 0; i < count; i++) {
        result.push({
            id: i + 1,
            name: `Todo Item ${i + 1}`,
            isDone: i % 3 === 0
        });
    }

    return result;
}