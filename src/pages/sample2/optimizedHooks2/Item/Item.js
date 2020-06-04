import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTodo } from '../../../../store/list2';

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
                checked={item.isDone}
                onChange={onChange} />
        </div>
    );
}

export default memo(Item);
