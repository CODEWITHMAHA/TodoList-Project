import { useState } from "react";
const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({id:value , content: value , checked:false});
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id:"" , content: "" , checked:false});
  };

  return (
    <section className="flex justify-center items-center text-2xl my-1 p-1 w-full">
      <form
        onSubmit={handleFormSubmit}
        className="flex sm:flex-row w-full max-w-xl"
      >
        <input
          type="text"
          className="p-2 text-xl rounded-l-2xl w-full bg-gray-100 text-blue-950 focus:outline-none"
          autoComplete="off"
          placeholder="Enter your Todos"
          value={inputValue.content}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <button
          type="submit"
          className="px-2 py-0.5 bg-purple-600 text-white rounded-r-2xl hover:bg-purple-700 transition-colors duration-200 font-semibold"
        >
          Add Task
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
