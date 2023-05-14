<template>
  <client-only>
    <splide class="" :options="options">
      <splide-slide
        v-for="(step, index) in steps"
        :key="index"
        class="group relative"
      >
        <div
          class="absolute inset-0 invisible group-hover:visible bg-alw-main-600/40"
        >
          <div
            class="grid absolute inset-0 place-content-center px-8 m-4 border border-white"
          >
            <h3 class="font-neosansMedium text-4xl text-center text-[#FAD8C8]">
              {{ step.title }}
            </h3>
            <p class="mt-2 font-neosansRegular text-3xl text-center text-white">
              {{ step.subtitle }}
            </p>
          </div>
        </div>
        <figure class="block overflow-hidden w-full max-h-[40rem]">
          <img
            class="block object-cover w-full h-full"
            :src="step.image"
            alt="woman in spa"
          />
        </figure>
      </splide-slide>
    </splide>
  </client-only>
</template>

<script>
export default {
  name: "BeautyJourney",
  data() {
    return {
      options: {
        rewind: false,
        perPage: 4,
        direction: this.$i18n.locale === "ar" ? "rtl" : "ltr",
        classes: {
          arrows:
            "splide__arrows absolute -top-12 end-2 inline-block md:hidden space-s-4",
          arrow:
            "inline-flex z-10 justify-center items-center p-2 w-8 h-8 rounded-full border-2 shadow-lg bg-[color:var(--accent-1)]) custom-slider-arrow-colors",
          prev: "splide__arrow--prev d-arrow-prev",
          next: "splide__arrow--next d-arrow-next",
          pagination:
            "inline-flex md:hidden absolute -bottom-8 left-[-41%] right-1/2 z-10 flex-wrap justify-center items-center p-0 m-0 w-11/12 translate-x-1/2",
          page: "inline-block bottom-0 p-0 m-1 w-2 h-2 rounded-full transition-all duration-200 custom-slider-bullet custom-is-active",
        },
        breakpoints: {
          992: {
            perPage: 2,
            arrows: true,
          },
        },
      },
      steps: [
        {
          title: this.$t("alw.trip.step1.title"),
          subtitle: this.$t("alw.trip.step1.subtitle"),
          image: require("~/assets/images/static/1.webp"),
        },
        {
          title: this.$t("alw.trip.step2.title"),
          subtitle: this.$t("alw.trip.step2.subtitle"),
          image: require("~/assets/images/static/2.webp"),
        },
        {
          title: this.$t("alw.trip.step3.title"),
          subtitle: this.$t("alw.trip.step3.subtitle"),
          image: require("~/assets/images/static/3.webp"),
        },
        {
          title: this.$t("alw.trip.step4.title"),
          subtitle: this.$t("alw.trip.step4.subtitle"),
          image: require("~/assets/images/static/4.webp"),
        },
      ],
    };
  },
};
</script>
