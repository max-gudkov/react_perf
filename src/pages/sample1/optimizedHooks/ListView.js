import React, { memo } from 'react';

const ListView = function ListView({ list }) {
        return (
            <div className="todo-list">
                {list.map(item => (
                    <div className="todo-item"
                        key={item.id}>
                        <input type="text" defaultValue={item.name} />
                        <input type="checkbox" defaultChecked={item.isDone} />
                    </div>
                ))}
            </div>
        );
};

export default memo(ListView);