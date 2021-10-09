<template>
  <div class="bg-dark mx-3 sm:mx-4 my-2">
    <h3 class="quicksand text-2xl sm:text-4xl">{{ title }}</h3>
    <div class="sm:mx-4 mx-3 flex flex-row overflow-x-scroll">
      <temperature-card
        v-for="(forecast, index) in historical"
        :key="forecast.dt"
        :dataset="forecast"
        :index="index"
        :type="title"
      />
    </div>
  </div>
</template>

<script>
import TemperatureCard from "@/components/TemperatureCard.vue";
export default {
  name: "Historical Card",
  components: {
    TemperatureCard,
  },
  props: {
    historical: Array,
    title: String,
  },
};
</script>

<style></style>
