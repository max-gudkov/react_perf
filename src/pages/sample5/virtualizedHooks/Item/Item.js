import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTodo } from '../../../../store/list2';

import LazyDatePicker from '../LazyDatePicker/LazyDatePicker';

const Item = function Item({ itemId }) {
    const item = useSelector(state => state.list2.values[itemId]);

    const dispatch = useDispatch();
    const onChange = () => dispatch(
        toggleTodo(item.id, !item.isDone)
    );

    return (
        <div className="todo-item">
            <input type="text" defaultValue={item.name} />
            <input type="checkbox"
                defaultChecked={item.isDone}
                onChange={onChange} />
            <div className="date-picker">
                <LazyDatePicker />
            </div>
        </div>
    );
}

export default memo(Item);
