import React from 'react';

import SaveBtn from './SaveBtn/SaveBtn';
import FilterTodo from './FilterTodo/FilterTodo';
import List from './List/List';

const Sample4 = function Sample4() {
    return (
        <div>
            Sample 4 Hooks
            <SaveBtn/>
            <hr/>
            <FilterTodo />
            <hr />
            <List />
        </div>
    );
}

export default Sample4;
