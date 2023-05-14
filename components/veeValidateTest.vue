<template>
  <div class="flex justify-center">
    <div class="w-full">
      <form
        class="shadow-md rounded px-8 pt-6 pb-8 flex justify-center item-center w-full"
      >
        <ValidationObserver
          ref="form"
          class="gap-5 w-full lg:grid lg:grid-cols-2 d-flex-col"
          tag="section"
        >
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            rules="required|min:3"
            :custom-messages="{
              required: $t('firstNameValidation'),
              min: $t('firstNameValidation'),
            }"
          >
            <fieldset class="relative gap-1.5 w-full d-flex-col">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <div
                class="overflow-hidden w-full rounded-md border border-[color:var(--main-3)] d-flex-row"
                :class="[errors[0] && '!border-red-500', borderClasses]"
              >
                <input
                  v-model="firstName"
                  required
                  type="text"
                  name="first-name"
                  :placeholder="$t('firstName')"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                  :class="[`!p-[.66rem] !font-neosansRegular ${inputBg}`]"
                />
              </div>

              <span
                v-show="errors[0]"
                class="w-full font-neosansRegular leading-none text-red-500 capitalize lg:absolute lg:top-full"
              >
                {{ errors[0] }}
              </span>
            </fieldset>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            rules="required|min:10"
            :custom-messages="{
              required: $t('password'),
              min: $t('password'),
            }"
          >
            <fieldset class="relative gap-1.5 w-full d-flex-col">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="username"
              >
                Password
              </label>
              <div
                class="overflow-hidden w-full rounded-md border border-[color:var(--main-3)] d-flex-row"
                :class="[errors[0] && '!border-red-500', borderClasses]"
              >
                <input
                  v-model="Password"
                  required
                  type="Password"
                  name="Password"
                  :placeholder="$t('Password')"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                  :class="[`!p-[.66rem] !font-neosansRegular ${inputBg}`]"
                />
              </div>

              <span
                v-show="errors[0]"
                class="w-full font-neosansRegular leading-none text-red-500 capitalize lg:absolute lg:top-full"
              >
                {{ errors[0] }}
              </span>
            </fieldset>
          </ValidationProvider>
        </ValidationObserver>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "VeeVlidateTest",
  data() {
    return {
      firstName: "",
      Password: "",
      showErrorFirstName: false,
    };
  },
};
</script>
