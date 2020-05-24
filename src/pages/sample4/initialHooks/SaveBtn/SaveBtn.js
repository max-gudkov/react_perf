import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { saveDate } from '../../../../store/date';

const SaveBtn = function () {
    const date = useSelector(state => state.date);

    const dispatch = useDispatch();
    const onClick = () => dispatch(saveDate());

        return (
            <div>
                <button onClick={onClick}>
                    Save date {date}
                </button>
            </div>
        );
}

export default SaveBtn;