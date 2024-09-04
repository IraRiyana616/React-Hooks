import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Menambahkan data baru
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks((prevState) => [...prevState, inputValue]);

      setInputValue('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  useEffect(() => {
    console.log('Tasks updated:', tasks);
  }, [tasks]);

  return (
    <div className="container">
      <h1 className="heading font-bold text-2xl">To-Do List</h1>
      <div className="inputContainer">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="I need to"
          className="input"
        />
      </div>
      <ul className="list">
        {tasks.map((task, index) => (
          <li key={index} className="listItem">
            {task}
            <button onClick={() => removeTask(index)} className="deleteButton">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
