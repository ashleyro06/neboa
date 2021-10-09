<template>
  <div
    class="
      detail-container
      h-10rem
      px-8
      mb-4
      flex flex-row
      align-items-center
      justify-content-between
      quicksand
    "
  >
    <div class="detail-item" v-for="item in dataMap" :key="item.value">
      <span>{{ information[item.value] }}</span>
      <h6>{{ item.label }}</h6>
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
        { label: "Feels like", value: "feels_like" },
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
  .detail-item {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h6 {
      margin: 5px 0;
      font-size: 1.2rem;
    }
    span {
      font-size: 1.5rem;
    }
  }
}
</style>
