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
  </section>
</template>
<script>
export default {
  name: "SlideHome",

  data() {
    return {
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
