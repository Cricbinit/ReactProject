// src/TaskForm.js
import React, { useState } from 'react';

const MessageInput = () => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTask, completed: false }),
      })
        .then((response) => response.json())
        .then(() => setNewTask(''));
    }
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <input
        type="text"
        placeholder="Enter task title"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default MessageInput;
