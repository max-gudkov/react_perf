import React from 'react';
import DatePicker from 'react-16-bootstrap-date-picker';

const ItemView = ({ name, isDone, toggle }) => {
    return (
        <div className="todo-item">
            <input type="text" defaultValue={name} />
            <input type="checkbox"
                defaultChecked={isDone}
                onChange={toggle} />
            <div className="date-picker">
                <DatePicker />
            </div>
        </div>
    );
}

export default ItemView;