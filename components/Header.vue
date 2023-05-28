<template>
  <section>
    <header class="bg-white">
      <nav class="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            class="w-16 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="..."
          />
        </div>
        <div
          class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5"
        >
          <ul
            class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8"
          >
            <li>
              <a class="hover:text-gray-500" href="#">{{ $t("asd") }}</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">{{ $t("asd") }}</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">{{ $t("asd") }}</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">{{ $t("asd") }}</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-6">
          <!-- <button
            class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
          >
            Sign in
          </button> -->
          <langBtn />
          <ion-icon
            onclick="onToggleMenu(this)"
            name="menu"
            class="text-3xl cursor-pointer md:hidden"
          ></ion-icon>
        </div>
      </nav>
      <div class="relative">
        <div
          ref="lottie"
          role="button"
          class="absolute bottom-0 left-1/2 top-5 bg-orange-400 w-20 h-20 -translate-x-1/2 cursor-pointer rounded-xl"
          @click.prevent="scrollDown"
        ></div>
      </div>
    </header>
    <div>
      <h1 class="text-center p-4 text-red-600 text-xl m-4">Example</h1>
    </div>

    <slideHome />
  </section>
</template>

<script>
export default {
  name: "Header",
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
      window.scroll({ top: 750, behavior: "smooth" });
    },
  },
};
</script>
