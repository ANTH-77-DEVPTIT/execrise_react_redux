// action creator là một function

export const addTodo = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data,
    }
}


export const searchTextChange = (text) => {
    return {
        type: "filters/searchText",
        payload: text
    }
}