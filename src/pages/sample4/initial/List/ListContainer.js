import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from './ListView';
import { loadList, getFilteredIds } from '../../../../store/list3';

@connect(
    state => ({
        ids: getFilteredIds(state)
    }),
    { loadList }
)
class ListContainer extends Component {
    componentDidMount() {
        this.props.loadList(1000);
    }

    render() {
        return <ListView ids={this.props.ids} />;
    }
}

export default ListContainer;