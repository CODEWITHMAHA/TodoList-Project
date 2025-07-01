const todosKey = "reactTodo";
export const getLocalStorageTodoData = ()=>{
 const rawTodos = localStorage.getItem(todosKey)
    if(!rawTodos) return []
    return JSON.parse(rawTodos)
}

export const setLocalStorageTodoData = (task)=>{
 return localStorage.setItem(todosKey,JSON.stringify(task))
}