import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List as AutoSizedList, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';

import { loadList, getFilteredIds } from '../../../../store/list3';

import Item from '../Item/Item';
import SavingBlock from '../../../../components/SavingBlockHooks';

const List = function ListView() {
    const ids = useSelector(getFilteredIds);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadList(3000));
    }, [dispatch]);

    const rowRenderer = ({ index, style }) => {
        const itemId = ids[index];

        return (
            <div key={itemId} style={style}>
                <Item itemId={itemId} />
            </div>
        );
    };

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
