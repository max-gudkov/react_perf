import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadList1 } from '../../../store/list1';

import ListView from './ListView';

const Sample1 = function Sample1() {
    const [itemText, setItemText] = useState('');
    const changeItemText = e => {
        setItemText(e.target.value);
    };

    const list = useSelector(state => state.list1);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadList1(3000));
    }, [dispatch]);

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
            <ListView list={list} />
        </div>
    );
}

export default Sample1;
