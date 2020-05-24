import React from 'react';

import SaveBtn from './SaveBtn/SaveBtn';
import FilterTodo from './FilterTodo/FilterTodo';
import List from './List/List';

const Sample4 = function Sample4() {
    return (
        <div className="page-content">
            Sample 5 Hooks Virtualized
            <SaveBtn/>
            <hr/>
            <FilterTodo />
            <hr />
            <List />
        </div>
    );
}

export default Sample4;
