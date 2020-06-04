import React from 'react';

import ItemContainer from '../Item/ItemContainer';

const ListView = ({ ids, isSaving }) => {
    return (
        <div className="todo-list">
            {isSaving && <div className="saving-block">Saving...</div>}
            
            {ids.map(id => (
                <ItemContainer
                    key={id}
                    itemId={id} />
            ))}
        </div>
    );
}

export default ListView;
