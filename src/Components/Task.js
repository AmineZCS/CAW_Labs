import React, { useState } from "react";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";


const Task = ({
  tasks,
  setTasks,
  addSubtask,
  setEditTask,
  editTask,
}) => {
  const [showAddSubtaskModal, setShowAddSubtaskModalLocal] = useState(false);
  const [newSubtaskTitle, setNewSubtaskTitleLocal] = useState("");
  const [expandedTasks, setExpandedTasks] = useState([]);
  const [currentTaskIdLocal, setCurrentTaskIdLocal] = useState(null);

  const handleSubtaskChange = (taskId, subtaskId, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks.map((subtask) =>
                subtask.id === subtaskId
                  ? { ...subtask, title: newTitle }
                  : subtask
              ),
            }
          : task
      )
    );
  };

  const handleAddSubtask = (taskId) => {
    setShowAddSubtaskModalLocal(true);
    setCurrentTaskIdLocal(taskId);
  };

  const handleAddSubtaskConfirm = () => {
    if (currentTaskIdLocal) {
      const newSubtask = {
        id: uuidv4(),
        title: newSubtaskTitle,
        completed: false,
      };
      addSubtask(currentTaskIdLocal, newSubtask);
      setNewSubtaskTitleLocal("");
      setShowAddSubtaskModalLocal(false);
    }
  };

  const handleAddSubtaskCancel = () => {
    setNewSubtaskTitleLocal("");
    setShowAddSubtaskModalLocal(false);
  };


  const toggleTaskExpansion = (taskId) => {
    setExpandedTasks((prevExpandedTasks) =>
      prevExpandedTasks.includes(taskId)
        ? prevExpandedTasks.filter((id) => id !== taskId)
        : [...prevExpandedTasks, taskId]
    );
  };

  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const handleSubtaskDone = (taskId, subtaskId) => {
    const subtask = document.getElementById(subtaskId);
    subtask.classList.toggle("subtask-done");
    subtask.classList.toggle("completed-subtask-container");
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="listask-container">
          <div className="list-item">
          <button
                className="button-edit task-button"
                onClick={() => toggleTaskExpansion(task.id)}
                
              >
                <i className="fa fa-angle-down"></i>
            </button>
            <input
              disabled
              type="text"
              value={task.title}
              className="list"
              
            />
            <div>
              <button
                className="button-edit task-button"
                onClick={() => setEditTask(task)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="button-delete task-button"
                onClick={() => handleDeleteTask(task)}
              >
                <i className="fa fa-trash"></i>
              </button>
              <button className="add-subtask" onClick={() => handleAddSubtask(task.id)}>
                Add Subtask
              </button>
            </div>
          </div>

          {expandedTasks.includes(task.id) && (
            <ul>
              {task.subtasks.map((subtask) => (
                <li
                  key={subtask.id}
                  className={`subtask-container ${
                    subtask.completed ? "subtask-done" : ""
                  } ${subtask.completed ? "completed-subtask-container" : ""}`}
                >
                  <input
                    disabled
                    id={subtask.id}
                    type="text"
                    value={subtask.title}
                    className="list"
                    onChange={(e) =>
                      handleSubtaskChange(task.id, subtask.id, e.target.value)
                    }
                  />
                  <button
                    className="button-subtask-done"
                    onClick={() => handleSubtaskDone(task.id, subtask.id)}
                  >
                    Done
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {showAddSubtaskModal && (
        <Modal onClose={handleAddSubtaskCancel}>
          <h2>{editTask ? "Edit Subtask" : "Add Subtask"}</h2>
          <input
            type="text"
            placeholder="Subtask title"
            value={newSubtaskTitle}
            onChange={(e) => setNewSubtaskTitleLocal(e.target.value)}
          />
          <button onClick={handleAddSubtaskConfirm}>
            {editTask ? "Edit" : "Add"}
          </button>
          
        </Modal>
      )}
    </div>
  );
};

export default Task;
