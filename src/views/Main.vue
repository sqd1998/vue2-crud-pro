<template>
  <div>
    <el-container style="height: 100%">
      <el-aside>Aside</el-aside>
      <el-container class="Container">
        <el-header>Header</el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import elAside from '../components/Aside'
import elHeader from '../components/Header'
export default {
  name: 'Main',
  components: {
    elAside,
    elHeader
  },
  
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: black;
}
.el-main {
  padding-top: 0 !important;
  background-color: #eeeeee;
}

</style>
