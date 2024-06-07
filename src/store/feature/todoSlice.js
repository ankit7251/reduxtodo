import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: JSON.parse(localStorage.getItem("todos")) || [],
};
console.log(initialState.todo[0]);
const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        id: nanoid(),
        text: action.payload,
      });
      localStorage.setItem("todos", JSON.stringify(state.todo));
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todo));
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
