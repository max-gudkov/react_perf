import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getItemNameById, getItemIsDoneById, toggleTodo } from '../../../../store/list3';

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
        </div>
    );
}

export default memo(Item);
