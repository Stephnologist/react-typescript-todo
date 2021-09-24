import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import {InterfaceTask} from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadlineTask] = useState<number>(0);
  const [todoList, setTodoList] = useState<InterfaceTask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    if (name === "task") {
      setTask(value);
    } else {
      setDeadlineTask(Number(value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadlineTask(0)
  }

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            onChange={handleChange}
            name="task"
            value={task}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
            name="deadline"
            value={deadline}
          />
        </div>
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: InterfaceTask, key: number) => {
          return <ToDo key={key} task={task} deleteTask={deleteTask}/>;
        })}
      </div>
    </div>
  );
};

export default App;
