import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import SavingBlock from '../../../../components/SavingBlock';
import { List as AutoSizedList, AutoSizer }  from 'react-virtualized';
import 'react-virtualized/styles.css';

import { loadList } from '../../../../store/list2';

import Item from '../Item/Item';

const getFilteredIds = createSelector(
    state => state.list2.ids,
    state => state.list2.values,
    state => state.filter,
    (ids, values, filter) => {
        return ids.filter(id => values[id].name.includes(filter));
    }
);

const List = function ListView() {
    const ids = useSelector(getFilteredIds);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadList(3000));
    }, [dispatch]);

    const rowRenderer = ({index, style}) => {
        const itemId = ids[index];

        return (
            <div key={itemId} style={style}>
                <Item itemId={itemId} />
            </div>
        );
    };

    console.log('render');

    return (
        <div className="todo-list">
            <SavingBlock />
            <AutoSizer>
                    {({ height, width }) => (
                        <AutoSizedList
                            height={height}
                            width={width} 
                            rowCount={ids.length}
                            rowHeight={40}
                            rowRenderer={rowRenderer}
                        />
                    )}
                </AutoSizer>
        </div>
    );
}

export default memo(List);
