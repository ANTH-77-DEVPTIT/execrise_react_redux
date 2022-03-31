// selector creator
// export const todoListSelector = (state) => {
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });

//   return todosRemaining;
// };

//phải phân tích được ta muốn như thế nào?
//Phân tích: khi ta lấy được searchText, status, priority
// thì ta kết hợp 3 cái trên với todoList để lọc ra todos phù hợp và render ra màn hình

// export const searchTextSelector= (state) => state.filters.search

// reselect

import { createSelector } from "reselect";

const todoListSelector = (state) => state.todoList;
const searchTextSelector = (state) => state.filters.search;
const statusSelector = (state) => state.filters.status;
const prioritiesSelector = (state) => state.filters.priorities;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  statusSelector,
  searchTextSelector,
  prioritiesSelector,
  (todoList, status, searchText, priorities) => {
    // Phân tích xíu nhé an:
    // status có 3 trạng thái: All Completed Todo
    // nếu All thì filter theo search thôi
    // còn Completed hay Todo thì filter theo search và todo là completed hay todo

    //Phân tích khi có thêm priorties dô nữa nhên
    // status === All && priorities === 0 thì filter theo search và priorities
    // status === All && priorities !== 0 thì filter theo search
    // status !== All thì filter theo search && status là Completed hay Todo && priorities

    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) && 
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
