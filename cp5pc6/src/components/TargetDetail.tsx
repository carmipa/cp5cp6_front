import React, { useState, useEffect } from 'react';
import { getTargets, deleteTarget } from '../services/api';

type Target = {
  id: number;
  name: string;
};

const TargetList: React.FC = () => {
  const [targets, setTargets] = useState<Target[]>([]);

  useEffect(() => {
    getTargets().then((response) => setTargets(response.data));
  }, []);

  const handleDelete = (id: number) => {
    deleteTarget(id).then(() => {
      setTargets(targets.filter((target) => target.id !== id));
    });
  };

  return (
    <div>
      <h2>Target List</h2>
      <ul>
        {targets.map((target) => (
          <li key={target.id}>
            {target.name}
            <button onClick={() => handleDelete(target.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TargetList;
