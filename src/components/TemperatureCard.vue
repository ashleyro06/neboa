<template>
  <div
    v-if="index < 24"
    class="
      bg-dark-200
      border-radius-2
      flex flex-column
      justify-content-between
      align-items-center
      py-3
      px-2
      sm:py-4 sm:px-3
      mx-2
      t-card
    "
  >
    <span class="quicksand text-2xl m-0 relative font-semibold">
      {{ typeof dataset.temp == "object" ? dataset.temp.day : dataset.temp }}
      <span class="contrast-text font-normal absolute top-0">º</span></span
    >
    <custom-icon
      class="w-7 sm:w-full md:w-full lg:w-full xl:w-full px-2 my-4"
      :type="dataset.weather[0].main"
    />
    <span class="quicksand block sm:hidden text-sm">{{
      dataset.weather[0].main
    }}</span>
    <span class="quicksand">{{ hourOrDay }}</span>
  </div>
</template>

<script>
import moment from "moment";
import CustomIcon from "@/components/CustomIcon.vue";
export default {
  name: "TemperatureCard",
  props: {
    dataset: Object,
    index: Number,
    type: String,
  },
  components: { CustomIcon },
  data() {
    return {
      // This is an example of the data thar a request brings
      example: {
        dt: 1633766400,
        temp: 10.49,
        feels_like: 10.08,
        pressure: 1029,
        humidity: 95,
        dew_point: 9.72,
        uvi: 0.38,
        clouds: 90,
        visibility: 10000,
        wind_speed: 0.92,
        wind_deg: 48,
        wind_gust: 1.56,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0,
      },
    };
  },
  computed: {
    typeData() {
      return typeof this.dataset.temp;
    },
    hourOrDay() {
      if (this.type == "Hourly") {
        return this.index > 9 ? `${this.index}:00` : `0${this.index}:00`;
      } else {
        return moment()
          .add(this.index + 1, "days")
          .format("L");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.t-card {
  min-width: 150px;
}
</style>
