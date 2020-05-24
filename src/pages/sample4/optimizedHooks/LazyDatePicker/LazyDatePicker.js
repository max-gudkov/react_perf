import React, { useState, useRef, useEffect } from 'react';
import { findDOMNode } from 'react-dom';
import DatePicker from 'react-16-bootstrap-date-picker';

const FakeDatePicker = function FakeDatePicker({ value, onClick }) {
    return (
        <span
            onClick={onClick}
            className="input-group">
            <input type="text"
                value={value}
                placeholder="DD/MM/YYYY"
                className="form-control" />
            <span className="input-group-addon">
                <div>×</div>
            </span>
        </span>
    );
}

const LazyDatePicker = function LazyDatePicker({ value }) {
    const [isClicked, setIsClicked] = useState(false);
    const ref = useRef();

    const onClick = () => setIsClicked(true);

    useEffect(() => {
        if (isClicked) {
            findDOMNode(ref.current.refs.input).focus();
        }
    }, [isClicked]);

    return isClicked ? (
        <DatePicker
            value={value}
            ref={ref} />
    ) : (
            <FakeDatePicker value={value} onClick={onClick} />
        );
}

export default LazyDatePicker;
