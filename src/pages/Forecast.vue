<template>
  <div
    class="
      h-screen
      w-screen
      text-white
      background-weather-icon
      overflow-hidden
      mt-4
      relative
      flex flex-column
      justify-content-evenly
      md:justify-content-between
    "
  >
    <historical-card
      :title="item.label"
      :historical="weather[item.value]"
      v-for="item in dataMap"
      :key="item.value"
    />

    <Footer class="hidden sm:flex" />
  </div>
</template>

<script>
import HistoricalCard from "@/components/HistoricalCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Forecast",
  props: {
    weather: Object,
  },
  components: {
    HistoricalCard,
    Footer,
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
