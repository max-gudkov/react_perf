import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadList1, toggleTodo } from '../../../store/list1';

/*
state = {
    list1: [
        {id, name, isDone}
        {id, name, isDone = !isDone} <= TOGGLE_TODO
        {id, name, isDone}
        {id, name, isDone}
    ]
}
*/

@connect(
    state => ({
        list: state.list1
    }),
    { loadList1, toggleTodo }
)
class Sample0 extends Component {
    state = { itemText: '' };

    componentDidMount() {
        this.props.loadList1(30);
    }

    changeItemText = e => {
        this.setState({ itemText: e.target.value });
    }

    render() {
        const { list } = this.props;
        const { itemText } = this.state;

        return (
            <div>
                Sample 0
                <div>
                    <input
                        type="text"
                        value={itemText}
                        onChange={this.changeItemText} />
                </div>
                <hr />
                <div className="todo-list">
                    {list
                        .filter(item => item.name.includes(itemText))
                        .map(item => (
                            <div className="todo-item"
                                key={item.id}>
                                <input type="text" defaultValue={item.name} />
                                <input type="checkbox" checked={item.isDone} onChange={() => this.props.toggleTodo(item.id, !item.isDone)} />
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}

export default Sample0;