import React, { useState } from "react";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import SearchTask from "./SearchTask";
import AddTaskModal from "./AddTaskModal";

export default function TaskBoard() {
  const initialState = {
    id: crypto.randomUUID,
    title: "Learn Python",
    description:
      "Learn Python and Python Tools  for Python Development and Production in",
    tags: ["python", "web", "backend"],
    priority: "high",
    isFavourite: false,
  };

  const [tasks, setTasks] = useState([initialState]);
  const [isShowTaskModal, setIsShowTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleShowAddTaskModal = () => {
    setIsShowTaskModal(true);
  };

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setIsShowTaskModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setIsShowTaskModal(true);
  };

  const handleCloseClick = () => {
    setTaskToUpdate(null);
    setIsShowTaskModal(false);
  };

  const handleDeleteTask = (deleteTask) => {
    setTasks(tasks.filter((task) => task.id !== deleteTask.id));
  };

  const handleAllDelete = () => {
    setTasks([]);
  };

  const handleFavourite = (favouriteTask) => {
    let newTasks = [...tasks];
    newTasks = newTasks.map((task) => {
      if (task.id === favouriteTask.id) {
        task.isFavourite = !task.isFavourite;
      }
      setTasks(newTasks);
    });
  };

  const handleSearch = (searchTerm) => {
    let newTasks = [...tasks];
    newTasks = newTasks.filter((task) => {
        if(searchTerm.length>0){

            return task.title.toLowerCase().includes(searchTerm.toLowerCase());
        }
        else{
            return task
        }
    });
    setTasks(newTasks);
  }
  return (
    <section className="mb-20" id="tasks">
      {isShowTaskModal && (
        <AddTaskModal
          taskToUpdate={taskToUpdate}
          onAddTaskClick={handleAddEditTask}
          onCloseClick={handleCloseClick}
        />
      )}

      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask  onSearch={handleSearch}/>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onShowAddTaskForm={handleShowAddTaskModal}
            onAllDelete={handleAllDelete}
          />
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onFavourite={handleFavourite}
          />
        </div>
      </div>
    </section>
  );
}
