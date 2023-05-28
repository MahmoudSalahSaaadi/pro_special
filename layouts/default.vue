<template>
  <main class="container"  :dir="direction">
    <Header  />
    <Nuxt />

    <!-- Google Tag Manager (noscript) -->
  </main>
</template>

<script>
export default {
  name: "DefaultLayout",
  computed: {
    direction() {
      return this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
    }
  }
};
</script>
