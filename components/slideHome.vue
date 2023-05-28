<template>
  <section >
    <div class="flex justify-center items-center w-full mt-28">
      <h1
        class="text-lg text-red-400 capitalize font-bold bg-slate-300 p-12 rounded-lg"
      >
        {{ $t("textlang") }}
      </h1>
    </div>

    <div class="p-8">
      <client-only class="flex flex-col">
        <splide class="z-20" :options="options">
          <splide-slide
            v-for="(item, index) in Array(skeletonLength)"
            :key="`theSkeleton-${index}`"
          >
            <img src="~assets/images/Mask Group 14874.png" alt="img" />
          </splide-slide>

          <splide-slide
            v-for="(item, index) in Array(skeletonLength)"
            :key="`theSkeleton-${index}`"
          >
            <img src="~assets/images/Mask Group 14874.png" alt="img" />
          </splide-slide>
        </splide>
      </client-only>
    </div>
    <div
      v-if="loading"
      class="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="(item, index) in Array(skeletonLength)"
        :key="`theSkeleton-${index}`"
        class="flex overflow-hidden flex-col rounded-2xl border"
      >
        <TheSkeleton :width="1000" :height="190" />
        <div class="p-3 space-y-3">
          <div class="flex justify-between">
            <TheSkeleton :width="200" :height="25" class="rounded-lg" />
            <TheSkeleton :width="60" :height="60" class="ml-6" />
          </div>
          <div class="flex flex-row gap-2">
            <div>
              <TheSkeleton :width="25" :height="25" />
            </div>
            <div>
              <TheSkeleton :width="100" :height="25" class="rounded-lg" />
            </div>
          </div>
          <div class="space-y-1">
            <TheSkeleton :width="250" :height="5" />
            <TheSkeleton :width="300" :height="5" class="rounded-lg" />
            <TheSkeleton :width="300" :height="5" class="rounded-lg" />
          </div>

          <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-2">
              <div>
                <TheSkeleton :width="25" :height="25" />
              </div>
              <div>
                <TheSkeleton :width="100" :height="25" class="rounded-lg" />
              </div>
            </div>

            <div class="flex flex-row gap-2">
              <div>
                <TheSkeleton :width="25" :height="25" />
              </div>
              <div>
                <TheSkeleton
                  :width="100"
                  :height="25"
                  class="ml-10 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SlideHome",

  data() {
    return {
      skeletonLength: 5,
      loading: true,
      products: [],
      options: {
        rewind: false,
        perPage: 3,
        arrows: true,
        gap: "2rem",
        direction: this.$i18n.locale === "en" ? "rtl" : "ltr",
        classes: {
          arrows:
            "splide__arrows absolute w-full md:top-20 -top-12  inline-block  flex md:justify-between justify-start",
          arrow:
            "inline-flex z-10 md:-mr-12 md:-ml-12 -ml-0 -mr-0 justify-center items-center p-2 w-8 h-8 rounded-full border-2 shadow-lg bg-[color:var(--accent-1)]) custom-slider-arrow-colors disabled:bg-red-500 ",
          prev: "splide__arrow--prev d-arrow-prev ",
          next: "splide__arrow--next d-arrow-next",
          pagination:
            "inline-flex absolute -bottom-8 left-[-41%] right-1/2 z-10 flex-wrap justify-center items-center p-0 m-0 w-11/12 translate-x-1/2  active:bg-red-500",
          page: "inline-block bottom-0 p-0 m-1 w-2 h-2 lg:w-4 lg:h-4 rounded-full bg-[#af85b3] active:bg-red-500 transition-all duration-200  ",
        },
        breakpoints: {
          992: {
            perPage: 1,
          },
        },
      },
    };
  },
};
</script>
