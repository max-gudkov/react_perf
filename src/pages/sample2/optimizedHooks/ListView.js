import React, { memo } from 'react';

import Item from './Item';

const ListView = function ListView({ list, onToggle }) {
    return (
        <div className="todo-list">
            {list.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default memo(ListView);
