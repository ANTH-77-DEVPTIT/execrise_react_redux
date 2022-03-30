// selector creator
export const todoListSelector = (state) => {
  const todosRemaining = state.todoList.filter((todo) => {
    return todo.name.includes(state.filters.search);
  });

  return todosRemaining;
};

//phải phân tích được ta muốn như thế nào? 
//Phân tích: khi ta lấy được searchText, status, priority
// thì ta kết hợp 3 cái trên với todoList để lọc ra todos phù hợp và render ra màn hình

// export const searchTextSelector= (state) => state.filters.search
