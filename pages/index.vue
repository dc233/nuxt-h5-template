<template>
  <div>
    <client-only><vue-dplayer></vue-dplayer></client-only>
    <client-only>
      <div class="room-info van-hairline--bottom">
        <van-row type="flex" justify="space-between" align="center" gutter="20">
          <van-col span="10">
            <van-image
              round
              width="50px"
              height="50px"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
          /></van-col>
          <van-col span="10">
            <p class="font-big">主播：恩熙xync</p>
            <p class="font-small font-color">人气：4.7万 粉丝：3724</p>
          </van-col>
          <van-col span="4"
            ><van-button round type="info" size="small" color="#faad14"
              >APP内打开</van-button
            ></van-col
          >
        </van-row>
      </div>
    </client-only>
    <ul class="coupon_b_name van-hairline--bottom">
      <li
        v-for="(item, index) in cardList"
        :key="index"
        :class="{ actived: index == isActiveIndex }"
        @click="handlerClick(index)"
      >
        {{ item.title }}
      </li>
      <div class="zb-line" :style="[tabBarStyle]"></div>
    </ul>
    <client-only>
      <swiper ref="mySwiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide> I'm Slide 1 I'm Slide 1 I'm Slide 1 </swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    const _this = this
    return {
      active: 0,
      swiperOption: {
        on: {
          slideChangeTransitionEnd(params) {
            _this.isActiveIndex = this.activeIndex
            const ele = document.querySelector('.actived').offsetWidth
            const move = ele * this.activeIndex + (ele - 50) / 2
            _this.scrollBarLeft = move
          },
        },
      },
      cardList: [
        {
          title: '互动',
        },
        {
          title: '简介',
        },
        {
          title: '活动',
        },
      ],
      isActiveIndex: 0,
      scrollBarLeft: 0,
    }
  },
  computed: {
    // 移动tabr底部
    tabBarStyle() {
      const style = {
        transform: `translate(${this.scrollBarLeft}px, -100%)`,
        'transition-duration': '1s',
      }
      return style
    },
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.browser) {
      this.$nextTick(() => {
        this.tabrinit()
      })
    }
  },
  methods: {
    handlerClick(data) {
      this.isActiveIndex = data
      this.swiper.slideTo(this.isActiveIndex)
      const ele = document.querySelector('.actived').offsetWidth
      const move = ele * data + (ele - 50) / 2
      this.scrollBarLeft = move
    },
    // 计算初始化的tabr的移动距离
    tabrinit() {
      const ele = document.querySelector('.actived')
      const movewidth = (ele.offsetWidth - 50) / 2
      this.scrollBarLeft = movewidth
    },
  },
}
</script>
<style lang="less" scoped>
.room-info {
  height: 120px;
  padding: 10px;
  background-color: #fff;
}
.coupon_b_name {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  background-color: #fff;
  li {
    position: relative;
    flex: 1;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.zb-line {
  position: absolute;
  width: 50px;
  height: 3px;
  bottom: 2px;
  z-index: 1;
  left: 0;
  background-color: #faad14;
  overflow: hidden;
}
.actived {
  color: #faad14;
}
</style>
