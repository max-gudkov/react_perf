import React, { useState } from 'react';

import List from './List/List';

const Sample2 = function Sample2() {
    const [itemText, setItemText] = useState('');
    const changeItemText = e => {
        setItemText(e.target.value);
    };

    return (
        <div>
            Sample 2 Hooks Optimizied 2
            <div>
                <input
                    type="text"
                    value={itemText}
                    onChange={changeItemText} />
            </div>
            <hr />
            <List />
        </div>
    );
}

export default Sample2;
