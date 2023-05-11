<template>
  <section>
    <client-only>
      <splide class="z-20" :options="options">
        <splide-slide>
          <img src="~assets/images/Mask Group 14874.png" alt="" srcset="" />
        </splide-slide>
        <splide-slide>
          <img src="~assets/images/Mask Group 14874.png" alt="" srcset="" />
        </splide-slide>
        <splide-slide>
          <img src="~assets/images/Mask Group 14874.png" alt="" srcset="" />
        </splide-slide>

        <splide-slide>
          <p>{{ $t("sdsad") }}</p>
        </splide-slide>
      </splide>
    </client-only>

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
      skeletonLength: 3,
      loading: true,
      options: {
        rewind: false,
        perPage: 2,
        arrows: true,
        gap: "1rem",
        classes: {
          arrows:
            "splide__arrows absolute -top-12 start-50 inline-block space-s-4",
          arrow:
            "inline-flex z-10 justify-center items-center p-2 w-8 h-8 rounded-full border-2 shadow-lg bg-[color:var(--accent-1)]) custom-slider-arrow-colors",
          prev: "splide__arrow--prev d-arrow-prev",
          next: "splide__arrow--next d-arrow-next",
          pagination:
            "inline-flex absolute -bottom-8 left-[-41%] right-1/2 z-10 flex-wrap justify-center items-center p-0 m-0 w-11/12 translate-x-1/2",
          page: "inline-block bottom-0 p-0 m-1 w-2 h-2 lg:w-4 lg:h-4 rounded-full transition-all duration-200 custom-slider-bullet custom-is-active",
        },
        direction: this.$i18n.locale === "ar" ? "rtl" : "ltr",
        breakpoints: {
          3: {
            perPage: 1,
          },
        },
      },
    };
  },
};
</script>
