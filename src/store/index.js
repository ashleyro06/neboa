import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    getWeather: "1332b67b1e5326a1aeb5636c20234b0b",
    location: "",
    weather: null,
  },
  mutations: {
    SET_LOCATION(state, data) {
      state.location = data;
    },
    SET_WEATHER_INFORMATION(state, data) {
      state.weather = data;
    },
    SET_DETAILED_WEATHER(state, data) {
      state.weather = { ...state.weather, data };
    },
  },
  actions: {
    GET_WEATHER({ state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${state.location}&appid=${state.getWeather}&units=metric`
          )
          .then((response) => resolve(response.data))
          .catch((err) => reject(err));
      });
    },
    GET_DETAILED_INFORMATION({ state }) {
      return new Promise((resolve, reject) => {
        if (state.weather) {
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${state.weather.coord.lat}&lon=${state.weather.coord.lon}&exclude=current&appid=${state.getWeather}&units=metric`
            )
            .then((response) => resolve(response.data))
            .catch((err) => reject(err));
        }
      });
    },
  },
});
