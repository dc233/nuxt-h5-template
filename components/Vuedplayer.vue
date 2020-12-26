<template>
  <div id="dplayer"></div>
</template>

<script>
import DPlayer from 'dplayer'
export default {
  name: 'DPlayer',
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      // eslint-disable-next-line no-unused-vars
      const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
          url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4',
        },
      })
    }
  },
}
</script>
