import './App.css';
import NewTaskForm from './Components/NewTaskForm';
import TaskList from './Components/TaskList';
import Task from "./Components/Task";
import React, { useState } from "react";
import Modal from "./Components/Modal";
import { v4 as uuidv4 } from "uuid";


const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showAddSubtaskModal, setShowAddSubtaskModal] = useState(false);
  const [newSubtaskTitle, setNewSubtaskTitle] = useState("");
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const[editTask,setEditTask]=useState(null)

  const addSubtask = (taskId, subtask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, subtasks: [...task.subtasks, subtask] } : task
      )
    );
  };

  const handleAddSubtaskConfirm = () => {
    if (currentTaskId) {
      const newSubtask = {
        id: uuidv4(),
        title: newSubtaskTitle,
        completed: false,
      };
      addSubtask(currentTaskId, newSubtask);
      setNewSubtaskTitle("");
      setShowAddSubtaskModal(false);
    }
  };

  const handleAddSubtaskCancel = () => {
    setNewSubtaskTitle("");
    setShowAddSubtaskModal(false);
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
        <div>
          <NewTaskForm
            input={input}
            setInput={setInput}
            tasks={tasks}
            setTasks={setTasks}
            editTask={editTask}
            setEditTask={setEditTask}
          />
        </div>
        <div>
          <Task
            tasks={tasks}
            setTasks={setTasks}
            addSubtask={addSubtask}
            setShowAddSubtaskModal={setShowAddSubtaskModal}
            setNewSubtaskTitle={setNewSubtaskTitle}
            setCurrentTaskId={setCurrentTaskId}
            setEditTask={setEditTask}
            
          />
        </div>
      </div>

      {showAddSubtaskModal && (
        <Modal onClose={handleAddSubtaskCancel}>
          <h2>Add Subtask</h2>
          <input
            type="text"
            placeholder="Subtask title"
            value={newSubtaskTitle}
            onChange={(e) => setNewSubtaskTitle(e.target.value)}
          />
          <button onClick={handleAddSubtaskConfirm}>Add</button>
         
        </Modal>
      )}
    </div>
  );
};

export default App;
