import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadList, getFilteredIds } from '../../../../store/list3';

import Item from '../Item/Item';
import SavingBlock from '../../../../components/SavingBlockHooks';

const List = function ListView() {
    const ids = useSelector(getFilteredIds);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadList(3000));
    }, [dispatch]);

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
