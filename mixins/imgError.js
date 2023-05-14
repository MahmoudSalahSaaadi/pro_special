export const imgError = {
  methods: {
    imgError(
      { target },
      imgPath = require('~/assets/images/svg/image-error-placeholder.svg')
    ) {
      target.src = imgPath
    },
  },
}
