<template>
  <div class="flex">
    <side-container class="w-4 h-screen" />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import SideContainer from "@/views/SideContainer.vue";
export default {
  name: "App",
  components: {
    SideContainer,
  },
};
</script>

<style lang="scss">
@import "~primevue/resources/themes/mdc-light-deeppurple/theme.css";
@import "~primevue/resources/primevue.min.css"; //core css
@import "~primeicons/primeicons.css"; //icons
@import "~primeflex/primeflex.css"; //layout
</style>
