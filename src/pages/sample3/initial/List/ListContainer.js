import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from './ListView';
import { loadList } from '../../../../store/list2';

/*
state = {
    isSaving: false
    list2: {
        ids: [1, 2, 3, 4],
        values: {
            '1': {id, name, isDone}
            '2': {id, name, isDone = !isDone} <= TOGGLE_TODO
            '3': {id, name, isDone}
            '4': {id, name, isDone}
        }
    }
*/

@connect(
    state => {
        const ids = state.list2.ids;
        const values = state.list2.values;
        const filter = state.filter;

        return {
            ids: ids.filter(id => values[id].name.includes(filter)),
            //
            isSaving: state.isSaving
        };
    },
    { loadList }
)
class ListContainer extends Component {
    componentDidMount() {
        this.props.loadList(3000);
    }

    render() {
        return (
            <ListView 
                ids={this.props.ids}
                isSaving={this.props.isSaving} />
        );
    }
}

export default ListContainer;