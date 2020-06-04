import React, { memo } from 'react';

const ListView = function ListView({ list, onToggle }) {
    return (
        <div className="todo-list">
            {list.map(item => (
                <div className="todo-item"
                    key={item.id}>
                    <input type="text" defaultValue={item.name} />
                    <input type="checkbox"
                        checked={item.isDone}
                        onChange={() => onToggle(item)} />
                </div>
            ))}
        </div>
    );
}

export default memo(ListView);
