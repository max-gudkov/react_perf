import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTodo } from '../../../../store/list2';

import DatePicker from 'react-16-bootstrap-date-picker';

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
                <DatePicker />
            </div>
        </div>
    );
}

export default memo(Item);
