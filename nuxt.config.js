export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "proJust",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/images.jpg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [`~/assets/css/general.css`, `~/assets/css/tailwind.css`], // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/vue-splide.js",
      mode: "client",
    },
    "~/plugins/vue-fragment",
  ],

  loading: {
    color: "#1779BA",
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/axios",
    [
      "nuxt-i18n",
      {
        baseUrl: process.env.BASE_URL,
        strategy: "prefix_except_default",
        detectBrowserLanguage: false,
        locales: [
          {
            name: "english",
            code: "en",
            file: "en.js",
            iso: "en-US",
          },
          {
            name: "العربية",
            code: "ar",
            file: "ar.js",
            iso: "ar-AR",
          },
        ],
        lazy: true,
        langDir: "lang/",
        defaultLocale: "ar",
        vueI18n: {
          fallbackLocale: "ar",
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};
