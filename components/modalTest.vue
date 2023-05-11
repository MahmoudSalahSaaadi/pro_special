<template>
  <!-- <div id="app">
    <div class="asd">
      <button @click="showModal = true" class="button">Show Modal</button>
    </div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="pop" appear>
      <div class="modal" role="dialog" v-if="showModal">
        <h1>Vue Transitions</h1>
        <p>
          The <code>&lt;transition&gt;</code> component in Vue can create
          wonderful animated entrances and exits.
        </p>
        <button @click="showModal = false" class="button">Hide Modal</button>
      </div>
    </transition>
  </div> -->
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
        <veeValidateTest />
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
