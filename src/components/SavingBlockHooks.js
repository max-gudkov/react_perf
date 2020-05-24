import React from 'react';
import { useSelector } from 'react-redux';

const SavingBlock = () => {
    const isSaving = useSelector(state => state.isSaving);

    return isSaving ?
        <div className="saving-block">Saving...</div>
        : null;
};

export default SavingBlock;
