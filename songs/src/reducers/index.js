import { combineReducers } from "redux";

// reducers
const songsReducer = () => {
  return [
    { title: "Country Roads", duration: "4:05" },
    { title: "Blue Skies", duration: "6:07" },
    { title: "Whatever It Takes", duration: "3:35" },
    { title: "Hello", duration: "4:55" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
