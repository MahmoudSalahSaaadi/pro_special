<template>
  <VueSkeletonLoader
    :type="type"
    :width="width"
    :height="height"
    :animation="animation"
    :wave-color="waveColor"
  />
</template>

<script>
import VueSkeletonLoader from "skeleton-loader-vue";

export default{
  name: "TheSkeleton",
  components: { VueSkeletonLoader },
  props: {
    type: {
      type: String,
      default: "rect",
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    animation: {
      type: String,
      default: "wave",
    },
    waveColor: {
      type: String,
      default: "rgba(255, 255, 255, 0.2)",
      validator(value) {
        return /^(rgba)/.test(value);
      },
    },
  },
};
</script>
