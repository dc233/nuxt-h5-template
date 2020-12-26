<template>
  <!-- <div>
    <input id="" v-model="form.name" type="text" name="" />
    <p>输入框的值： {{ form.name }}</p>
    <div class="box">fuck2222</div>
    <div class="example"></div>
  </div> -->
  <div class="box">
    <div class="aspectratio w-188-246">
      <div class="aspectratio-content">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
    </div>
    <div class="aspectratio w-187-246">
      <div class="aspectratio-content">2</div>
    </div>
    <div class="aspectratio w-188-246">
      <div class="aspectratio-content">3</div>
    </div>
    <div class="aspectratio w-187-246">
      <div class="aspectratio-content">4</div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default',
  data() {
    return {
      form: {
        name: '',
      },
      title: '登录页',
    }
  },
  // async asyncData({ query, app }) {
  //   const { data } = await app.$axios.$post('api/admin/getTable', query)
  //   return {
  //     list: data.infoList,
  //   }
  // },
  mounted() {
    this.fetchSomething()
  },
  methods: {
    async fetchSomething() {
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }
      const res = await this.$axios
        .$post('api/admin/getTable', { id: 123 }, config)
        .catch((error) => {
          console.log(error)
        })
      console.log(res)
    },
  },
  head() {
    return {
      title: '登录页',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  middleware: ({ route, params, query }) => {
    console.log(route, params, query, 'page')
  },
  validate({ params, query }) {
    console.log(params, query, 'validate')
    return true
  },
}
</script>
<style>
.box {
  display: flex;
  background-color: #ccc;
  font-size: 24px;
}
.aspectratio {
  position: relative;
}
.aspectratio::before {
  content: '';
  display: block;
  width: 1px;
  margin-left: -1px;
  height: 0;
}

.aspectratio-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  font-size: 24px;
}
.w-188-246 {
  width: 188px;
  background-color: red;
}

.w-187-246 {
  width: 187px;
  background-color: pink;
}
.w-187-246 {
  aspect-ratio: 16 / 9;
}
.w-188-246 {
  aspect-ratio: 16 / 9;
}
</style>
