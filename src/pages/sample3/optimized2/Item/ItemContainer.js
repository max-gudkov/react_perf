import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemView from './ItemView';
import { getItemNameById, toggleTodo, getItemIsDoneById } from '../../../../store/list3';

@connect(
    (state, {itemId}) => ({
        id: itemId,
        name: getItemNameById(state, itemId),
        isDone: getItemIsDoneById(state, itemId)
    }),
    { toggleTodo }
)
class ItemContainer extends Component {
    toggle = () => {
        this.props.toggleTodo(
            this.props.id,
            !this.props.isDone
        );
    };

    render() {
        const { name, isDone } = this.props;

        return (
            <ItemView 
                name={name}
                isDone={isDone}
                toggle={this.toggle} />
        );
    }
}

export default ItemContainer;