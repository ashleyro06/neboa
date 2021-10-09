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
    <current-data />
    <img class="h-1rem sm:h-2rem" src="@/assets/images/logo-white.svg" />
  </div>
</template>

<script>
import CurrentData from "@/components/CurrentData.vue";
export default {
  name: "Navbar",
  components: { CurrentData },
};
</script>
