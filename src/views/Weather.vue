<template>
  <div>
    {{ weather }}
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Weather",
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

<style></style>
