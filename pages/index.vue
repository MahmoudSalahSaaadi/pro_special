<template class="container">
  <!-- <Header /> -->
  <section>

    <div>
      <h1 class="text-lg text-gray-400 capitalize font-bold">
        {{ $t("textlang") }}
      </h1>
    </div>
    <WeAreDifferent />
    <modalTest />
    <BeautyJourney />

  </section>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
