import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from './ListView';
import { loadList } from '../../../../store/list2';

/*
state = {
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
    state => ({
        ids: state.list2.ids
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