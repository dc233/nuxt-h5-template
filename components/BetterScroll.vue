<template>
  <div ref="wrapper" class="wrapper">
    <slot />
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.$nextTick(() => {
        this.initScroll()
      })
    }
  },
  methods: {
    initScroll() {
      const bs = new BScroll(this.$refs.wrapper, {
        click: true,
      })
    },
  },
}
</script>
