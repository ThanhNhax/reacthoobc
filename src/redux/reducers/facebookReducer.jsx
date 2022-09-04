import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrComment: [
    { name: "Hậu mentor", content: "A hi hi" },
    { name: "Quân mentor", content: "A hi hi" },
  ],
};

const facebookReducer = createSlice({
  name: "facebookReducer",
  initialState,
  reducers: {
    addComment: (state, action) => {
      //b1: lấy dữ ra từ payload
      let userComment = action.payload;
      //b2: cập nhật state
      state.arrComment.push(userComment);
    },
  },
});

export const { addComment } = facebookReducer.actions;

export default facebookReducer.reducer;
