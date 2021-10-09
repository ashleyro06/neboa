<template>
  <div
    class="
      fixed
      top-0
      w-screen
      montserrat
      flex flex-row
      align-items-center
      justify-content-between
      p-4
    "
  >
    <div class="flex flex-column">
      <span class="text-sm font-normal">{{ today }}</span>
      <p class="text-xl font-medium my-1">
        <font-awesome-icon :icon="['fa', 'map-marker-alt']" class="text-2xl" />
        {{ city }},
        <span class="text-lg opacity-60 font-normal"> {{ country }}</span>
      </p>
    </div>
    <img class="h-2rem" src="@/assets/images/logo-white.svg" />
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Navbar",
  props: {
    country: String,
    city: String,
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

<style></style>
