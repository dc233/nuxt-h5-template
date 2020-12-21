<template>
  <div>
    <input id="" v-model="form.name" type="text" name="" />
    <p>输入框的值： {{ form.name }}</p>
  </div>
</template>
<script>
export default {
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
      const res = await this.$axios.$post('api/admin/getTable', { id: 123 })
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
  font-size: 24px;
}
</style>
