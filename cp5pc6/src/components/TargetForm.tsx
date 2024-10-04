import React, { useState } from 'react';
import { createTarget, updateTarget } from '../services/api';

type Target = {
  id?: number;
  name: string;
};

const TargetForm: React.FC = () => {
  const [target, setTarget] = useState<Target>({ name: '' });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget({ ...target, name: e.target.value });
  };

  const handleSubmit = () => {
    if (editMode && target.id) {
      updateTarget(target.id, target).then(() => {
        setEditMode(false);
        setTarget({ name: '' });
      });
    } else {
      createTarget(target).then(() => setTarget({ name: '' }));
    }
  };

  return (
    <div>
      <h2>{editMode ? 'Edit Target' : 'Add Target'}</h2>
      <input 
        type="text" 
        value={target.name} 
        onChange={handleChange} 
        placeholder="Target name"
      />
      <button onClick={handleSubmit}>
        {editMode ? 'Update' : 'Add'}
      </button>
    </div>
  );
}

export default TargetForm;
