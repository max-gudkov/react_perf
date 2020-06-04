import React, { Component, createRef } from 'react';
import DatePicker from 'react-16-bootstrap-date-picker';
import ReactDOM from 'react-dom';

class DatePickerWrapper extends Component {
    datepicker = createRef()
    componentDidMount() {
        ReactDOM.findDOMNode(this.datepicker.current.refs.input).focus();
    }
    render() {
        return <DatePicker {...this.props} ref={this.datepicker} />
    }
}

export default DatePickerWrapper;
