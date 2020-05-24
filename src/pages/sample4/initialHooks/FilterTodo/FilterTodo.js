import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from '../../../../store/filter';

const FilterTodo = function () {
    const filter = useSelector(state => state.filter);

    const dispatch = useDispatch();
    const onChange = e => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <div>
            <input type="text"
                value={filter}
                onChange={onChange} />
        </div>
    );
}

export default FilterTodo;