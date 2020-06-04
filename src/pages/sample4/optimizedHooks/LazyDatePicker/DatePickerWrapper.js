import React, { useRef, useEffect } from 'react';
import DatePicker from 'react-16-bootstrap-date-picker';
import ReactDOM from 'react-dom';

const DatePickerWrapper = () =>  {
    const ref = useRef(null);
    useEffect(() => {
        ReactDOM.findDOMNode(ref.current.refs.input).focus();
    }, []);

    return <DatePicker {...this.props} ref={ref} />
}

export default DatePickerWrapper;
