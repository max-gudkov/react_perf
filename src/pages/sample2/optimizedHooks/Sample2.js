import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadList1, toggleTodo } from '../../../store/list1';

import ListView from './ListView';

const Sample2 = function Sample2() {
    const [itemText, setItemText] = useState('');
    const changeItemText = e => {
        setItemText(e.target.value);
    };

    const list = useSelector(state => state.list1);

    const dispatch = useDispatch();
    const onToggle = useCallback(
        item => dispatch(toggleTodo(item.id, !item.isDone)),
        [dispatch]
    );

    useEffect(() => {
        dispatch(loadList1(3000));
    }, []);

    return (
        <div>
            Sample 2 Hooks Optimizied
            <div>
                <input
                    type="text"
                    value={itemText}
                    onChange={changeItemText} />
            </div>
            <hr />
            <ListView
                list={list}
                onToggle={onToggle} />
        </div>
    );
}

export default Sample2;
