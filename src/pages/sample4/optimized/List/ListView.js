import React from 'react';

import SavingBlock from '../../../../components/SavingBlock';
import ItemContainer from '../Item/ItemContainer';

const ListView = ({ ids }) => {
    return (
        <div className="todo-list">
            <SavingBlock/>

            {ids.map(id => (
                <ItemContainer
                    key={id}
                    itemId={id} />
            ))}
        </div>
    );
}

export default ListView;