<template>
  <TheSection class="!pt-4 mb-4 md:px-36 md:!pt-[125px] md:mb-16">
    <div
      class="flex overflow-x-auto flex-row gap-8 md:flex-col md:w-full element"
    >
      <div
        v-for="(group, gIndex) in items"
        :key="gIndex"
        class="flex gap-8 justify-center mt-20"
      >
        <div
          v-for="(item, index) in group"
          :key="index"
          class="group flex flex-col items-center p-8 w-[280px] h-[190px] hover:bg-gradient-to-b from-[#663500] to-[#B18A4B] rounded-lg border border-[#B08C3E] md:w-1/3"
        >
          <figure
            class="flex relative group-hover:top-[-3.1rem] items-center px-4 pb-1 -mt-16 h-20 bg-white transition-all duration-300"
            :class="[item.iconWidth]"
          >
            <img class="w-full" :src="item.image" alt="icon" />
          </figure>
          <h4
            class="font-neosansMedium text-2xl text-center text-[#212529] group-hover:text-white"
          >
            {{ item.title }}
          </h4>
          <p
            class="mt-4 font-neosansRegular text-xl text-center text-[#AFADAC] group-hover:text-white"
          >
            {{ item.subtitle }}
          </p>
        </div>
      </div>
    </div>




    <div> 
    <h1 class="text-center p-4 text-red-600 text-xl m-4">
      Example  
      </h1>
   
 <p class="line-clamp-2 w-full p-4 text-orange-600 text-xl m-4 ">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
  </div>
  </TheSection>
</template>
<script>
export default {
  name: "WeAreDifferent",
  data() {
    return {
      items: [
        [
          {
            image: require("~/assets/images/svg/different-exclusive-experts.svg"),
            title: this.$t("alw.different.experts.title"),
            subtitle: this.$t("alw.different.experts.subtitle"),
            iconWidth: "w-20",
          },
          {
            image: require("~/assets/images/svg/different-new-tech.svg"),
            title: this.$t("alw.different.tech.title"),
            subtitle: this.$t("alw.different.tech.subtitle"),
            iconWidth: "w-20",
          },
          {
            image: require("~/assets/images/svg/different-one-roof.svg"),
            title: this.$t("alw.different.roof.title"),
            subtitle: this.$t("alw.different.roof.subtitle"),
            iconWidth: "w-32",
          },
        ],
        [
          {
            image: require("~/assets/images/svg/different-luxruious-experience.svg"),
            title: this.$t("alw.different.luxury.title"),
            subtitle: this.$t("alw.different.luxury.subtitle"),
            iconWidth: "w-20",
          },
          {
            image: require("~/assets/images/svg/different-first-in-jeddah.svg"),
            title: this.$t("alw.different.jeddah.title"),
            subtitle: this.$t("alw.different.jeddah.subtitle"),
            iconWidth: "w-20",
          },
        ],
      ],
    };
  },
};
</script>
