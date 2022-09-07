<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  components: {},
  name: 'APP',
  methods: {
    //解决vuex刷新后  初始化数据问题（把数据存入session中解决）
    saveState() {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state.user))
    }
  },
  mounted() {
    window.addEventListener('unload', this.saveState)
  }
}
</script>

<style lang="less" scroped>

</style>
