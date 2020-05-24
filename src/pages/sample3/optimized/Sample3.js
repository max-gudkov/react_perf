import React, {Component} from 'react';

import SaveBtnContainer from './SaveBtn/SaveBtnContainer';
import FilterTodoContainer from './FilterTodo/FilterTodoContainer';
import ListContainer from './List/ListContainer';

class Sample3 extends Component {
    render() {
        return (
            <div>
                Sample 3 (Optimized reselect)
                <SaveBtnContainer/>
                <hr/>
                <FilterTodoContainer/>
                <hr/>
                <ListContainer/>
            </div>
        );
    }
}

export default Sample3;

// Improvements:
// using reselect for filtered todos
// Saving Block has been moved to separate component
