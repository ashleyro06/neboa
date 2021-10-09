<template>
  <div
    class="
      h-screen
      w-screen
      text-white
      background-weather-icon
      overflow-hidden
      relative
      flex flex-column
      justify-content-center
      align-items-center
    "
  >
    <navbar :country="weather.sys.country" :city="weather.name" />
    <div
      class="
        top-0
        h-full
        flex
        justify-content-center
        flex-column
        align-items-center
      "
    >
      <custom-icon
        class="h-4rem sm:h-8rem md:h-12rem"
        :type="weather.weather[0].main"
      />
      <h6
        class="quicksand text-xl sm:text-3xl md:text-4xl mb-0 mt-2 font-normal"
      >
        {{ weather.weather[0].main }}
      </h6>
      <h1 class="quicksand text-5xl sm:text-7xl md:text-8xl my-2 relative">
        {{ parseInt(weather.main.temp).toFixed(0) }}
        <span
          class="
            contrast-text
            font-normal
            absolute
            text-4xl
            sm:text-6xl
            md:text-7xl
            top-0
          "
          >º</span
        >
      </h1>
    </div>
    <weather-detail-container :information="weather.main" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CustomIcon from "@/components/CustomIcon.vue";
import WeatherDetailContainer from "@/components/WeatherDetailContainer.vue";
export default {
  name: "CurrentWeather",
  components: { Navbar, WeatherDetailContainer, CustomIcon },
  props: {
    weather: Object,
  },
};
</script>

<style lang="scss" scoped>
.background-weather-icon {
  background-image: url("../assets/images/world-map.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 10rem;
  width: 40%;
  .weather-icon {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}

@media (max-width: 600px) {
  .background-weather-icon {
    background-size: cover;
  }
}
</style>
