import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadList } from '../../../../store/list2';

import Item from '../Item/Item';

const getFilteredIds = state => {
    const ids = state.list2.ids;
    const values = state.list2.values;
    const filter = state.filter;

    return ids.filter(id => values[id].name.includes(filter));
};

const List = function ListView() {
    const ids = useSelector(getFilteredIds);
    const isSaving = useSelector(state => state.isSaving);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadList(3000));
    }, [dispatch]);

    return (
        <div className="todo-list">
            {isSaving && <div className="saving-block">Saving...</div>}

            {
                ids.map(id => (
                    <Item
                        key={id}
                        itemId={id}
                    />
                ))
            }
        </div>
    );
}

export default memo(List);
