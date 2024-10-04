import React, { useState, useEffect } from 'react';
import { getTodos } from '../services/api';

type Todo = {
  id: number;
  title: string;
  description: string;
  targetId: number;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then((response) => setTodos(response.data));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
