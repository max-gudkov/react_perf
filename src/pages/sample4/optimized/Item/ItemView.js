import React from 'react';
import LazyDatePicker from '../LazyDatePicker/LazyDatePicker';

const ItemView = ({ name, isDone, toggle }) => {
    return (
        <div className="todo-item">
            <input type="text" defaultValue={name} />
            <input type="checkbox"
                checked={isDone}
                onChange={toggle} />
            <div className="date-picker">
                <LazyDatePicker />
            </div>
        </div>
    );
}

export default ItemView;