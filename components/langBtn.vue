<template>
  <fragment>
    <nuxt-link
      class="font-montser text-base font-normal text-black capitalize 2xl:text-lg custom-langbtn"
      :to="switchLocalePath(nextLocale.code)"
    >
      {{ nextLocale.name }}
    </nuxt-link>
  </fragment>
</template>

<script>
export default {
  name: "LangBtn",
  computed: {
    nextLocale() {
      return this.$i18n.locales.filter(
        (i) => i.code !== this.$i18n.locale
      )?.[0];
    },
  },
};
</script>

<style scoped>
.custom-langbtn:lang(en) {
  @apply font-neosansMedium;
}
</style>
