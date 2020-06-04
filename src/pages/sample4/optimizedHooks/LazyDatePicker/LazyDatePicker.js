import React, { Suspense, useState, lazy } from 'react';

const DatePickerLazy = lazy(() => import('./DatePickerWrapper'));

const RealDatePicker = ({value}) => (
    <Suspense fallback={<DatePickerFake value={value} />}>
        <DatePickerLazy value={value} />
    </Suspense>
);

const DatePickerFake = function FakeDatePicker({ value, onClick }) {
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
    const onClick = () => setIsClicked(true);

    return isClicked ? (
        <RealDatePicker value={value} />
    ) : (
            <DatePickerFake value={value} onClick={onClick} />
        );
}

export default LazyDatePicker;
