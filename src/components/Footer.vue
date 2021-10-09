<template>
  <div
    class="
      pl-4
      pr-8
      py-4
      w-screen
      flex-row
      justify-content-between
      align-items-center
      quicksand
    "
  >
    <current-data />
    <div class="flex flex-row align-items-center">
      Developed by Ashley Guevara
      <img class="ml-2 h-1rem sm:h-2rem" src="@/assets/images/logo-white.svg" />
    </div>
  </div>
</template>

<script>
import CurrentData from "@/components/CurrentData.vue";
export default {
  name: "Footer",
  components: { CurrentData },
};
</script>
