import React, { memo } from 'react';

const Item = function Item({ item, onToggle }) {
    //const onChange = useCallback(() => onToggle(item), [item]);
    const onChange = () => onToggle(item);

    return (
        <div className="todo-item">
            <input type="text" defaultValue={item.name} />
            <input type="checkbox"
                defaultChecked={item.isDone}
                onChange={onChange} />
        </div>
    );
}

export default memo(Item);