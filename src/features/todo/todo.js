import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        // id: uuid(),
        payload: action.payload,
      };
      state.push(todo);
    },
  },
});

export const { addTodo } = todoslice.actions;
export default todoslice.reducer;
