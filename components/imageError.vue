<template>
  <section
    class="flex justify-center items-center flex-col gap-8 border-t border-orange-600 border-solid"
  >
    <div v-for="(step, index) in steps" :key="index">
      <h1
        class="text-orange-400 capitalize text-lg mt-4 font-neosansBold block"
      >
        {{ step.title }}
      </h1>
      <figure
        class="max-w-sm max-h-52 my-6 flex md:flex-row flex-col gap-5 justify-center items-center"
      >
        <img
          class="w-full h-full object-cover"
          :src="step.image"
          alt="img"
          @error="imgError"
        />
        <img
          class="w-full h-full object-cover"
          :src="step.image"
          alt="img"
          @error="imgError"
        />
      </figure>
    </div>
  </section>
</template>
<script>
export default {
  name: "imageError",
  data() {
    return {
      steps: [
        {
          title: this.$t("Example"),
          image: require("~/assets/images/Mask Group 14874.png"),
        },
      ],
    };
  },
};
</script>
