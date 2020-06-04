import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from './ListView';
import { loadList, getFilteredIds } from '../../../../store/list3';

/*
state = {
    list3: {
        ids: [1, 2, 3, 4],
        names: {
            '1': {id, name}
            '2': {id, name}
            '3': {id, name}
            '4': {id, name}
        },
        values: {
            '1': {id, isDone}
            '2': {id, isDone = !isDone} <= TOGGLE_TODO
            '3': {id, isDone}
            '4': {id, isDone}
        }
    }
*//*
const getFilteredIds = createSelector(
    state => state.list3.ids,
    state => state.list3.name,
    state => state.filter,
    ///
    (ids, names, filter) => {
        return ids.filter(id => names[id].name.includes(filter));
    }
);
*/
@connect(
    state => ({
        ids: getFilteredIds(state)
    }),
    { loadList }
)
class ListContainer extends Component {
    componentDidMount() {
        this.props.loadList(3000);
    }

    render() {
        return <ListView ids={this.props.ids} />;
    }
}

export default ListContainer;