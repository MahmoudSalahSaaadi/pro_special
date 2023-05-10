<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    :class="color"
  >
    <path
      id="search"
      d="M29,30a.994.994,0,0,1-.707-.293L21.707,23.12A13.145,13.145,0,0,1,3.851,3.85a13.144,13.144,0,0,1,19.27,17.855l6.587,6.587A1,1,0,0,1,29,30ZM13.147,2A11.146,11.146,0,0,0,5.265,21.028,11.146,11.146,0,1,0,21.029,5.264,11.073,11.073,0,0,0,13.147,2Z"
      transform="translate(0.249 0.25)"
    />
  </svg>
</template>

<script>
export default {
  name: 'SvgSearch',
  props: {
    color: {
      type: String,
      default: 'fill-orange-700',
    },
  },
}
</script>
