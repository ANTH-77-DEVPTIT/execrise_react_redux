const initState = {
  todoList: [
    { id: 1, name: "Learn java", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn react native", completed: false, priority: "Low" },
  ],

  filters: {
    search: "",
    status: "All",
    priority: [],
  },
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case "filters/searchText":
        return {
            ...state,
            filters: {
                ...state.filters.search,
                search: action.payload
            }
        }
    

    default:
      return state;
  }
};

export default rootReducer;
