<template>
  <img :src="getIconUrl" v-tooltip.bottom="type" />
</template>

<script>
export default {
  name: "CustomIcon",
  props: {
    type: String,
  },
  computed: {
    getIconUrl() {
      switch (this.type) {
        case "Clear":
          return require("@/assets/images/icons/clear.svg");
        case "Thunderstorm":
          return require("@/assets/images/icons/thunderstorm.svg");
        case "Drizzle":
          return require("@/assets/images/icons/drizzle.svg");
        case "Rain":
          return require("@/assets/images/icons/rain.svg");
        case "Clouds":
          return require("@/assets/images/icons/clouds.svg");
        case "Fog":
          return require("@/assets/images/icons/fog.svg");
        case "Mist":
          return require("@/assets/images/icons/mist.svg");
        case "Smoke":
          return require("@/assets/images/icons/smoke.svg");
        case "Snow":
          return require("@/assets/images/icons/snow.svg");
        case "Tornado":
          return require("@/assets/images/icons/tornado.svg");
        default:
          return require("@/assets/images/icons/default.svg");
      }
    },
  },
};
</script>
