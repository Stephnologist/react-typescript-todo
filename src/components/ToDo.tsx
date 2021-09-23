import React from "react";
import { InterfaceTask } from "../Interfaces";

interface Props {
  task: InterfaceTask;
  deleteTask(taskNameToDelete: string): void;
}

const ToDo = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={() => {
        deleteTask(task.taskName)
      }}>X</button>
    </div>
  );
};

export default ToDo;
