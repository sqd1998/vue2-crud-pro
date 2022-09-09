<template>
  <header>
    <div class="L-content">
      <el-button plain
                 icon="el-icon-menu"
                 size="mini"
                 @click="controlAside"></el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right"
                     class="mbx">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">管理列表</el-breadcrumb-item>

      </el-breadcrumb>

      <!-- <h3>面包屑</h3> -->
    </div>
    <div class="R-content">
      <el-dropdown trigger="click"
                   @command="toLogin">
        <span class="el-dropdown-link">
          <img :src='userImg'
               class="userImg">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="quit">退出</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import bus from '../eventBus'
import { mapState } from 'vuex'

export default {
  name: 'Header',
  props: {
    // isCollapse: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      userImg: require('../assets/img.jpeg'),
      status: false
    }
  },
  methods: {
    controlAside() {
      this.status = !this.status
      // console.log(this.status);
      bus.$emit('share', this.status)
    },
    toLogin(command) {
      if (command === 'quit') {
        this.$router.push('/')
        // console.log(command)
        this.$store.commit('clearToken')
        // console.log(this.$store.state.token);
        
        

         this.$message({
          
          message: '退出成功',
          type: 'success'
        })
      }
    }
  },
  components: {},
  computed: {
    // ...mapState({
    //   tags: state => state.path.pathList
    // })
  }
}
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  .mbx {
    margin-left: 15px;
  }
}
.userImg {
  width: 40px;
  align-items: center;
  margin-right: 20px;
  border-radius: 50%;
}

.L-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-left: 15px;
  }
  h3 {
    margin-left: 15px;
    color: #fff;
  }
}
</style>
