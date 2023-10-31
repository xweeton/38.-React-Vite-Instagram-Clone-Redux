import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    image: "https://picsum.photos/id/135/500/500",
    description: "Tagged 1 description",
    date: new Date().toISOString(),
    likes: 15,
    comments: 5,
  },
  {
    id: 2,
    image: "https://picsum.photos/id/136/500/500",
    description: "Tagged 2 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: 10,
  },
  {
    id: 3,
    image: "https://picsum.photos/id/137/500/500",
    description: "Tagged 3 description",
    date: new Date().toISOString(),
    likes: 1000,
    comments: 100,
  },
  {
    id: 4,
    image: "https://picsum.photos/id/141/500/500",
    description: "Tagged 4 description",
    date: new Date().toISOString(),
    likes: 3000,
    comments: 30,
  },
  {
    id: 5,
    image: "https://picsum.photos/id/139/500/500",
    description: "Tagged 5 description",
    date: new Date().toISOString(),
    likes: 5000,
    comments: 50,
  },
  {
    id: 6,
    image: "https://picsum.photos/id/140/500/500",
    description: "Tagged 6 description",
    date: new Date().toISOString(),
    likes: 10000,
    comments: 100,
  },
];

const taggedsSlice = createSlice({
  name: "taggeds",
  initialState: initialState,
  reducers: {
    createTagged: (state, action) => {
      const newTagged = {
        id: Date.now(),
        image: action.payload.image,
        description: action.payload.description,
        date: new Date().toISOString(),
        likes: 0,
        comments: 0,
      };
      state.push(newTagged);
    },

    updateTagged: (state, action) => {
      const index = state.findIndex(
        (tagged) => tagged.id === action.payload.id
      );
      state[index] = action.payload;
    },

    deleteTagged: (state, action) => {
      const deleteTaggedId = action.payload;
      return state.filter((tagged) => tagged.id !== deleteTaggedId);
    },
  },
});

export const { createTagged, updateTagged, deleteTagged } =
  taggedsSlice.actions;

export default taggedsSlice.reducer;
