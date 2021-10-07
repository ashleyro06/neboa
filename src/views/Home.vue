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
      <!-- <h1 class="">Nevoa</h1> -->
      <h3 class="quicksand text-3xl sm:text-4xl text-center">
        ¿Where are we going?
      </h3>
      <InputText type="text" class="dark-input center-text montserrat" />
      <Button class="primary-btn" label="Get me there!" @click="getMeThere" />
    </div>
    <img class="h-screen w-screen" src="@/assets/images/buildings.svg" alt="" />
  </div>
  <loading-template v-if="isLoading" />
</template>

<script>
import LoadingTemplate from "@/components/LoadingTemplate.vue";
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
    getMeThere() {
      this.isLoading = true;
      setTimeout(() => {
        console.log("here");
        this.isLoading = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
