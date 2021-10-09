<template>
  <div
    class="
      detail-container
      h-10rem
      px-8
      mb-4
      flex flex-column
      sm:flex-row
      align-items-center
      sm:justify-content-between
      justify-content-evenly
      quicksand
    "
  >
    <div
      class="
        flex flex-row-reverse
        align-items-center
        sm:flex-column sm:mx-3
        mx-0
      "
      v-for="item in dataMap"
      :key="item.value"
    >
      <span class="my-0 sm:my-1 sm:text-xl md:text-2xl">{{
        information[item.value]
      }}</span>
      <h6 class="my-0 sm:my-2 sm:text-lg md:text-xl mx-2 sm:mx-0">
        {{ item.label }}
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherDetailContainer",
  props: {
    information: Object,
  },
  data() {
    return {
      dataMap: [
        { label: "Temp. Feeling", value: "feels_like" },
        { label: "Humidity", value: "humidity" },
        { label: "Pressure", value: "pressure" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.detail-container {
  background: $dark-200;
  border-radius: 20px;
}
</style>
