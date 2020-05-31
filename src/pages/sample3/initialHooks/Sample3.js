import React from 'react';

import SaveBtn from './SaveBtn/SaveBtn';
import FilterTodo from './FilterTodo/FilterTodo';
import List from './List/List';

const Sample3 = function Sample3() {
    return (
        <div>
            Sample 3 Hooks
            <SaveBtn/>
            <hr/>
            <FilterTodo />
            <hr />
            <List />
        </div>
    );
}

export default Sample3;
