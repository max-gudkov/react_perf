import React, { Component, Suspense, lazy } from 'react';

const DatePickerLazy = lazy(() => import('./DatePickerWrapper'));

const RealDatePicker = ({value}) => (
    <Suspense fallback={<DatePickerFake value={value} />}>
        <DatePickerLazy value={value} />
    </Suspense>
);

const DatePickerFake = ({ value, onClick }) => (
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

class DatePicker extends Component {
    state = { isClicked: false };

    onClick = () => {
        this.setState({ isClicked: true });
    }

    render() {
        const { value } = this.props;
        const { isClicked } = this.state;

        if (!isClicked) {
            // Fake DatePicker that mimics real one
            return (
                <DatePickerFake value={value} onClick={this.onClick} />
            );
        }

        return (
            <RealDatePicker
                value={value} />
        );
    }
}

export default DatePicker;