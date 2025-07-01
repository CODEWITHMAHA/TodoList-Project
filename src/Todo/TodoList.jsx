import { MdOutlineCheck, MdDeleteForever } from "react-icons/md";
const TodoList = ({data,onHandleDeleteTodo}) => {
  return (
    <li
              className="max-w-[400px] min-h-10 sm:p-5 p-2 rounded-tl-2xl rounded-br-2xl mt-8 bg-rose-200 text-2xl text-black overflow-hidden flex flex-row items-center justify-center gap-3"
            >
              <div className="break-words w-full">{data}</div>
              <div className="flex flex-row gap-5 mt-2 sm:mt-0">
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors cursor-pointer"
                  title="Mark as done"
                  // onClick={addTask}
                >
                  <MdOutlineCheck size={24} />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors cursor-pointer"
                  title="Delete"
                  onClick={()=>onHandleDeleteTodo(data)}
                >
                  <MdDeleteForever size={24} />
                </button>
              </div>
            </li>
  )
}

export default TodoList
