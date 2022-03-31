// action creator là một function

export const addTodo = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data,
    }
}

export const addToggleTodoStatus= (todoId) => {
    return {
        type: "todoList/addToggleTodoStatus",
        payload: todoId,
    }
}



export const searchTextChange = (text) => {
    return {
        type: "filters/searchText",
        payload: text
    }
}

export const statusFiltersChange = (status) => {
    return {
        type: "filters/statusChange",
        payload: status
    }
}

export const prioritiesFiltersChange = (priorities) => {
    return {
        type: "filters/prioritiesChange",
        payload: priorities
    }
}