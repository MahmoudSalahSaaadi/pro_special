<template>
  <section
    class="flex justify-center items-center flex-col gap-8 m-6 border-t border-orange-600 border-solid"
  >
    <div v-for="(step, index) in steps" :key="index">
      <h1
        class="text-orange-400 capitalize text-lg mt-4 font-neosansBold block text-center"
      >
        {{ step.title }}
      </h1>
      <figure
        class="max-w-sm max-h-52 my-12 flex md:flex-row flex-col gap-5 justify-center items-center"
      >
        <img
          class="w-full h-full object-cover"
          src="https://www.shutterstock.com/images-vector/jkl-j-initial-letters-looping-600w-1607770465.jpg"
          alt="img"
          @error="
            imgError(
              $event,
              require('~/assets/images/icons8-image-placeholder-69.png')
            )
          "
        />
        <img
          class="w-full h-full object-cover"
          src="https://www.shutterstock.com/images-vector/jkl-j-initial-letters-looping-600w-1607770465.jpg"
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
        },
      ],
    };
  },
};
</script>
