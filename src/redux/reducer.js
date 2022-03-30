const initState  ={
    filters: {
        search: "",
        status: "All",
        priority: [], //high, medium, low
    },

    todoList: [
        {id: 1, name: "Learn Yoga", completed: false, priority: "Medium"},
        {id: 2, name: "Learn React redux", completed: true, priority: "High"},
        {id: 3, name: "Learn React Native", completed: false, priority: "Low"},
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {id: 1, name: "Learn Yoga", completed: false, priority: "Medium"}
                ]
            }
            break;
    
        default:
            break;
    }
}

export default rootReducer;