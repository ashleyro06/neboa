<template>
  <div
    class="flex flex-column cursor-pointer"
    v-tooltip.bottom="'Let\'s go to another place'"
    @click="leave"
  >
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
import { mapMutations, mapState } from "vuex";
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
  methods: {
    ...mapMutations(["CLEAR_SEARCH"]),
    leave() {
      this.CLEAR_SEARCH();
      this.$router.push("/");
    },
  },
  mounted() {
    this.today = moment().format("lll");
  },
};
</script>
