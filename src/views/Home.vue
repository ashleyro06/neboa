<template>
  <div class="h-screen w-screen text-white max-h-screen overflow-y-hidden">
    <div
      class="
        w-screen
        flex flex-column
        justify-content-center
        align-items-center
        pt-3
        sm:pt-6
        px-4
        absolute
        top-0
      "
    >
      <h3 class="quicksand text-3xl sm:text-4xl text-center">
        ¿Where are we going?
      </h3>
      <InputText
        type="text"
        class="dark-input center-text montserrat"
        v-model="search"
        placeholder="My city"
      />
      <Button
        class="primary-btn"
        label="Get me there!"
        @click="getMeThere"
        :disabled="!search"
      />
    </div>
    <img class="h-screen w-screen" src="@/assets/images/buildings.svg" alt="" />
  </div>
  <loading-template v-if="isLoading" />
</template>

<script>
import LoadingTemplate from "@/components/LoadingTemplate.vue";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      search: "",
      isLoading: false,
    };
  },
  components: {
    LoadingTemplate,
  },
  methods: {
    ...mapMutations(["SET_LOCATION", "SET_WEATHER_INFORMATION"]),
    async getMeThere() {
      this.isLoading = true;
      this.SET_LOCATION(this.search);
      this.$store
        .dispatch("GET_WEATHER")
        .then((response) => {
          this.SET_WEATHER_INFORMATION(response);
          this.$router.push({ name: "Weather" });
        })
        .catch((err) => console.warn(err));
    },
  },
};
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
