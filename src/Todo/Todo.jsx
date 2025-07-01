import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDateTime from "./TodoDateTime";

const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const {id,content,checked} = inputValue;
    if (!content) return; //to check if the input field is empty or not
    //to checkid the data is already exist or not
    // if (task.includes(inputValue)) return; 
    const ifTodoContentMatched = task.find((currTask) => currTask.content === content);
    if(ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, {id,content,checked}]);
  };

  // Delete Todo
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content != value);
    setTask(updatedTask);
  };

  // clear all functionality
  const handleClearTodoData = () => {
    setTask([]);
  };
  // to handle checked todo
  const handleCheckedTodo = (content)=>{
    const updatedTask = task.map((currTask)=>{
      if(currTask.content === content){
        return{...currTask,checked:!currTask.checked}
      }else{
        return currTask;
      }
    });
    setTask(updatedTask)
  }

  return (
    <section className="w-full min-h-screen bg-purple-950 text-white flex flex-col items-center p-10 sm:p-5">
      <header className="flex flex-col items-center w-full mt-10">
        <h1 className="text-4xl font-bold my-2 text-center">Todo List</h1>
        <TodoDateTime />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="w-full flex justify-center">
        <ul className="w-full max-w-sm">
          {task.map((currTask) => (
            <TodoList
              key={currTask.id }
              data={currTask.content}
              checked={currTask.checked}
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleCheckedTodo={handleCheckedTodo}
            />
          ))}
        </ul>
      </section>
      <section className="flex justify-center w-full mt-4">
        <div
          className="bg-red-800 font-semibold p-2 mt-4 cursor-pointer rounded text-center w-full max-w-xs"
          onClick={handleClearTodoData}
        >
          Clear All
        </div>
      </section>
    </section>
  );
};

export default Todo;
