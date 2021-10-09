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
    "
  >
    <div>
      <h3>Hourly</h3>
    </div>
    <div>
      <h3>Daily</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forecast",
  props: {
    weather: Object,
  },
};
</script>
