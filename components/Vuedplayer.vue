<template>
  <div id="dplayer">123</div>
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
        // live: true,
        // loop: false,
        volume: 0.7,
        video: {
          url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4',
          pic:
            'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
        },
        logo: 'http://www.jxxkt.com/pc/img/logo.png',
        contextmenu: [
          {
            text: '此视屏版权',
            link: 'https://github.com/DIYgod/DPlayer',
          },
        ],
      })
    }
  },
}
</script>
