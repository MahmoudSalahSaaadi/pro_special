<template>
  <!-- <Header /> -->
  <section>
    <WeAreDifferent />
    <modalTest />
    <div class="relative">
      <div
        ref="lottie"
        role="button"
        class="absolute bottom-0 left-1/2 top-5 bg-slate-400 w-28 h-28 -translate-x-1/2 cursor-pointer"
        @click.prevent="scrollDown"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    this.$lottie.loadAnimation({
      container: this.$refs.lottie,
      loop: true,
      autoplay: true,
      path: "/json/lottie-scroll-down.json",
    });
  },
  methods: {
    scrollDown() {
      window.scroll({ top: -200, behavior: "smooth" });
    },
  },
};
</script>
