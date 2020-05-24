import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import { loadList } from '../../../../store/list2';

import Item from '../Item/Item';
import SavingBlock from '../../../../components/SavingBlockHooks';

const getFilteredIds = createSelector(
    state => state.list2.ids,
    state => state.list2.values,
    state => state.filter,
    ///
    (ids, values, filter) => {
        return ids.filter(id => values[id].name.includes(filter));
    }
);

const List = function ListView() {
    const ids = useSelector(getFilteredIds);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadList(3000));
    }, []);

    return (
        <div className="todo-list">
            <SavingBlock />

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
