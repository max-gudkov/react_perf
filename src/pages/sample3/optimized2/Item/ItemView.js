import React from 'react';

const ItemView = ({ name, isDone, toggle }) => {
    return (
        <div className="todo-item">
            <input type="text" defaultValue={name} />
            <input type="checkbox"
                defaultChecked={isDone}
                onChange={toggle} />
        </div>
    );
}

export default ItemView;