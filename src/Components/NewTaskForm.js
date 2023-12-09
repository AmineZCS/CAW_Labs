import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal";

const NewTaskForm = ({ input, editTask, setEditTask, setInput, tasks, setTasks }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");

  useEffect(() => {
    if (editTask) {
      setUpdatedTitle(editTask.title);
      setShowUpdateModal(true);
    }
  }, [editTask]);

  const updateTask = () => {
    if (!updatedTitle.trim()) {
      // Check if the updated title is empty or contains only whitespace
      return;
    }

    const updatedTasks = tasks.map((task) =>
      task.id === editTask.id ? { ...task, title: updatedTitle } : task
    );

    setTasks(updatedTasks);
    setEditTask(null);
    setInput("");
    setShowUpdateModal(false);
  };

  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
    setUpdatedTitle("");
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      // Check if the input is empty or contains only whitespace
      return;
    }

    if (editTask) {
      // If there's an edited task, update it
      updateTask();
    } else {
      // Otherwise, add a new task
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: uuidv4(),
          title: input,
          completed: false,
          subtasks: [],
        },
      ]);
      setInput("");
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="New task name"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>

      {showUpdateModal && (
        <Modal onClose={handleUpdateModalClose}>
          <h2>Update Task</h2>
          <input
            type="text"
            placeholder="Updated task name"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button onClick={updateTask}>Update</button>
          
        </Modal>
      )}
    </form>
  );
};

export default NewTaskForm;
