<template>
  <div id="dplayer"></div>
</template>

<script>
export default {
  layout: 'default',
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        // live: true,
        // loop: false,
        volume: 0.7,
        video: {
          url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
          pic:
            'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
          // type: 'hls',
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
  methods: {},
  head: {
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/hls.js@0.14.17/dist/hls.min.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/dplayer@1.26.0/dist/DPlayer.min.js',
      },
    ],
  },
}
</script>
