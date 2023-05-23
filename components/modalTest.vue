<template>
  <section class="w-full">
    <div class="flex flex-row justify-center items-center">
      <span class="flex flex-row gap-4 justify-center items-center">
        <button
          class="p-4 text-xl bg-green-300 text-black m-8 rounded-lg"
          @click.prevent="$modal.show('eclubs-search-modal')"
        >
          sign in
        </button>
      </span>
    </div>

    <div :class="{ 'direction-ltr': $i18n.locale === 'ar' }">
      <modal
        name="eclubs-search-modal"
        :adaptive="true"
        height="auto"
        width="80%"
        classes="!top-[190px] bg-white rounded-md"
      >
        <div class="flex justify-center items-center gap-2 flex-col p-4">
          <h1 class="text-lg text-gray-400 capitalize font-bold">Example Modal</h1>

          <button
            class="bg-slate-700 text-white capitalize text-lg p-6 m-6 rounded-lg"
          >
            close
          </button>
        </div>
      </modal>
    </div>
  </section>
</template>
<script>
export default {
  name: "modalTest",
  data() {
    return {
      showModal: false,
      query: "",
    };
  },
};
</script>
