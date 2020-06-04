import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getItemNameById, getItemIsDoneById, toggleTodo } from '../../../../store/list3';

import DatePicker from 'react-16-bootstrap-date-picker';

const Item = function Item({ itemId }) {
    const name = useSelector(state => getItemNameById(state, itemId));
    const isDone = useSelector(state => getItemIsDoneById(state, itemId));

    const dispatch = useDispatch();
    const onChange = () => dispatch(
        toggleTodo(itemId, !isDone)
    );

    return (
        <div className="todo-item">
            <input type="text" defaultValue={name} />
            <input type="checkbox"
                checked={isDone}
                onChange={onChange} />
            <div className="date-picker">
                <DatePicker />
            </div>
        </div>
    );
}

export default memo(Item);
