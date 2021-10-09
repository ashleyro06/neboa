<template>
  <div
    class="
      h-screen
      w-screen
      text-white
      background-weather-icon
      overflow-y-scroll
      mb-4
      mt-4
      relative
      flex flex-column
    "
  >
    <historical-card
      :title="item.label"
      :historical="weather[item.value]"
      v-for="item in dataMap"
      :key="item.value"
    />
  </div>
</template>

<script>
import HistoricalCard from "@/components/HistoricalCard.vue";
export default {
  name: "Forecast",
  props: {
    weather: Object,
  },
  components: {
    HistoricalCard,
  },
  data() {
    return {
      dataMap: [
        { label: "Hourly", value: "hourly" },
        { label: "Daily", value: "daily" },
      ],
    };
  },
};
</script>
