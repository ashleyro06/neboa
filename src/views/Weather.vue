<template>
  <div v-if="weather" class="overflow-y-scroll">
    <CurrentWeather :weather="weather" />
    <Forecast :weather="weather.data" v-if="weather.data" />
    <ScrollTop />
  </div>
</template>

<script>
import CurrentWeather from "@/pages/CurrentWeather.vue";
import Forecast from "@/pages/Forecast.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Weather",
  components: { CurrentWeather, Forecast },
  computed: {
    ...mapState(["weather"]),
  },
  mounted() {
    this.$store
      .dispatch("GET_DETAILED_INFORMATION")
      .then((response) => this.SET_DETAILED_WEATHER(response))
      .catch((err) => console.warn(err));
  },
  methods: {
    ...mapMutations(["SET_DETAILED_WEATHER"]),
  },
};
</script>
