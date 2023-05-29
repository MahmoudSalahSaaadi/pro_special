<template>
  <section
    class="flex justify-center items-center flex-col gap-8 border-t border-orange-600 border-solid"
  >
    <h1 class="text-orange-400 capitalize text-lg mt-4 font-neosansBold ">
      Exampel ImageError in CMS
    </h1>
    <figure
      class="max-w-sm max-h-52 my-6 flex md:flex-row flex-col gap-5 justify-center items-center"
    >
      <img
        class="w-full h-full object-cover"
        src="~assets/images/Mask Group 14874.png"
        alt="img"
        @error="
          imgError(
            $event,
            require('~/assets/images/svg/image-error-placeholder.svg')
          )
        "
      />
      <img
        class="w-full h-full object-cover"
        src="~assets/images/Mask Group 14874.png"
        alt="img"
        @error="imgError"
      />
    </figure>
  </section>
</template>
<script>
export default {
  name: "imageError.",
};
</script>
