import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Нижний Новгород",
  weather: "",
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setWeather(state, action) {
      state.weather = action.payload;
    },
  },
});

export const { setCity, setWeather } = citySlice.actions;

export default citySlice.reducer;
