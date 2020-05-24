import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadList } from '../../../../store/list2';

import Item from '../Item/Item';

const List = function ListView() {
    const ids = useSelector(state => state.list2.ids);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadList(3000));
    }, []);

    return (
        <div className="todo-list">
            {
                ids.map(id => (
                    <Item
                        key={id}
                        itemId={id}
                    />
                ))}
        </div>
    );
}

export default memo(List);
