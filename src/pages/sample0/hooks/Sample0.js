import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadList1, toggleTodo } from '../../../store/list1';

const Sample0 = () => {
    const [itemText, setItemText] = useState('');
    const changeItemText = e => {
        setItemText(e.target.value);
    }

    const list = useSelector(state => state.list1);
    const dispatch = useDispatch();

    useEffect(() => {
        loadList1(30)
    });

    return (
        <div>
            Sample 0 Hooks
            <div>
                <input
                    type="text"
                    value={itemText}
                    onChange={changeItemText} />
            </div>
            <hr />
            <div className="todo-list">
                {list
                    .filter(item => item.name.includes(itemText))
                    .map(item => (
                        <div className="todo-item"
                            key={item.id}>
                            <input type="text" defaultValue={item.name} />
                            <input type="checkbox" checked={item.isDone} onChange={() => dispatch(toggleTodo(item.id, !item.isDone))} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Sample0;