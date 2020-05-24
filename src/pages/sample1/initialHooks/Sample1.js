import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadList1 } from '../../../store/list1';

const Sample1 = function Sample1() {
    const [itemText, setItemText] = useState('');
    const changeItemText = e => {
        setItemText(e.target.value);
    };

    const list = useSelector(state => state.list1);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadList1(3000));
    }, []);

    return (
        <div>
            Sample 1 Hooks
            <div>
                <input
                    type="text"
                    value={itemText}
                    onChange={changeItemText} />
            </div>
            <hr />
            <div className="todo-list">
                {list.map(item => (
                    <div className="todo-item"
                        key={item.id}>
                        <input type="text" defaultValue={item.name} />
                        <input type="checkbox" defaultChecked={item.isDone} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sample1;
