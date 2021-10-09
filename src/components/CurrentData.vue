<template>
  <div class="flex flex-column">
    <span class="text-xs sm:text-sm font-normal">{{ today }}</span>
    <p class="text-lg sm:text-xl font-medium my-1">
      <font-awesome-icon
        :icon="['fa', 'map-marker-alt']"
        class="text-lg sm:text-2xl"
      />
      {{ weather.name }},
      <span class="text-base sm:text-lg opacity-60 font-normal">
        {{ weather.sys.country }}</span
      >
    </p>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
export default {
  name: "CurrentData",
  computed: {
    ...mapState(["weather"]),
  },
  data() {
    return {
      today: null,
    };
  },
  mounted() {
    this.today = moment().format("lll");
  },
};
</script>
