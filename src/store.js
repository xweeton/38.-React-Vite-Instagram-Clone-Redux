import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
import reelsReducer from "./features/reels/reelsSlice";
import taggedsReducer from "./features/taggeds/taggedsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    reels: reelsReducer,
    taggeds: taggedsReducer,
  },
});
