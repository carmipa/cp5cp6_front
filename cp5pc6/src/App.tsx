import React from 'react';
import './App.css';
import TargetList from './components/TargetList';
import TargetForm from './components/TargetForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TargetForm />
      <TargetList />
      <TodoList />
    </div>
  );
}

export default App;
