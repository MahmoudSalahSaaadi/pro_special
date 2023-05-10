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
    <div class="flex flex-row justify-between items-center">
      <span class="flex flex-row gap-4 md:hidden">
        <button @click.prevent="$modal.show('eclubs-search-modal')">
          <SvgSearch />
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
        <div
          class="w-full"
          :class="[$i18n.locale === 'ar' ? 'direction-rtl' : 'direction-ltr']"
        >
          <div
            class="overflow-hidden w-full rounded-md border border-[color:var(--main-3)] d-flex-row"
          >
            <button type="submit" class="ltr:ml-3 rtl:mr-3">
              <SvgSearch color="fill-[color:var(--main-3)]" class="w-6" />
            </button>

            <input
              v-model="query"
              type="text"
              name="eclubs_search"
              :placeholder="$t('eclubNameHere')"
              class="p-3 w-full h-full text-lg placeholder:text-[color:var(--gray-3)] text-[color:var(--black-1)] bg-white border-0 outline-none shadow-[0px_3px_10px_rgba(0,0,0,0.1)] font-neosansRegular pe-8 custom-input"
              @input="onInput"
              @keyup.enter="$modal.hide('eclubs-search-modal')"
            />
          </div>
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
