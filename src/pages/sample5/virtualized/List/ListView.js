import React, { Component } from 'react';
import { AutoSizer, List } from 'react-virtualized';
import 'react-virtualized/styles.css';

import SavingBlock from '../../../../components/SavingBlock';
import ItemContainer from '../Item/ItemContainer';

class ListView extends Component {

    rowRenderer = ({index, style}) => {
        const itemId = this.ids[index];
        return (
            <div key={itemId} style={style}>
                <ItemContainer itemId={itemId} />
            </div>
        );
    };

    render() {
        const { ids } = this.props;
        this.ids = ids;

        return (
            <div className="todo-list">
                <SavingBlock />
                <AutoSizer  >
                    {({ height, width }) => (
                        <List
                            height={height}
                            width={width} 
                            rowCount={ids.length}
                            rowHeight={40}
                            rowRenderer={this.rowRenderer}
                        />
                    )}
                </AutoSizer>
            </div>
        );
    }
}

export default ListView;