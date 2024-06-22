// src/TaskList.js
import React, { useState, useEffect } from 'react';

const MessageList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
