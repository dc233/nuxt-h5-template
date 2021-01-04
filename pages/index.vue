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
    <client-only>
      <ul class="coupon_b_name van-hairline--bottom">
        <li
          v-for="(item, index) in cardList"
          :key="index"
          :class="{ actived: index == isActiveIndex }"
          @click="handlerClick('cardChange', index)"
        >
          {{ item.title }}
        </li>
        <div class="zb-line"></div>
      </ul>
      <swiper ref="mySwiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
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
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  methods: {
    handlerClick(action, data) {
      if (action === 'cardChange') {
        this.isActiveIndex = data
        this.swiper.slideTo(this.isActiveIndex)
      }
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
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  background-color: #fff;
  li {
    position: relative;
    flex: 1;
    text-align: center;
  }
}
.actived {
  color: #faad14;
}
</style>
