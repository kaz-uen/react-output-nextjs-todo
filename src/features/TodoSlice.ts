import { createSlice } from "@reduxjs/toolkit";
import { TodoStateType } from "../types/TodoType";
import todoItemsData from "../data/todoItemsData";

const initialState: TodoStateType = {
  todoItemsData: todoItemsData,
  amount: todoItemsData.length,
  searchKeyword: "",
};

const TodoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const getMaxId: () => number = () => {
        let todoIdArray: number[] = [];
        state.todoItemsData.map((item) => {
          todoIdArray.push(item.id);
        });
        return Math.max(...todoIdArray);
      };
      const setId: number = state.amount !== 0 ? getMaxId() + 1 : 1;
      state.todoItemsData.push({
        id: setId,
        title: action.payload.title,
        content: action.payload.content,
      });
      state.amount += 1;
      state.searchKeyword = "";
    },
    updateTodo(state, action) {
      const newTodoItems = state.todoItemsData.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
            content: action.payload.content,
          };
        }
        return { ...item };
      });
      state.todoItemsData = newTodoItems;
    },
    deleteTodo(state, action) {
      const newTodoItems = state.todoItemsData.filter((item) => {
        if (item.id !== action.payload) return true;
      });
      state.todoItemsData = newTodoItems;
      state.amount = state.todoItemsData.length;
    },
    clearTodo(state, action) {
      const newTodoState: TodoStateType = action.payload;
      newTodoState.todoItemsData = [];
      newTodoState.amount = 0;
      return newTodoState;
    },
    searchTodo(state, action) {
      state.searchKeyword = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, clearTodo, searchTodo } =
  TodoSlice.actions;
export default TodoSlice.reducer;
