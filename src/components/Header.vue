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
                   @command="handleCommand"
                   >
        <span class="el-dropdown-link">
          <img :src='userImg'
               class="userImg">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item command="music">音乐盒</el-dropdown-item>

          <el-dropdown-item command="quit" divided>退出登录</el-dropdown-item>

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
      userImg: require('../assets/rabbit.gif'),
      status: false
    }
  },
  methods: {
    controlAside() {
      this.status = !this.status
      // console.log(this.status);
      bus.$emit('share', this.status)
    },
    handleCommand(command) {
      if (command === 'quit') {
        this.$router.push('/')
        // console.log(command)
        this.$store.commit('clearToken')
        // console.log(this.$store.state.token);
         this.$message({         
          message: '退出成功',
          type: 'success'
        })
      } else if (command === 'music'){
        this.$router.push('/music')
          
      }
    },
    
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
  width: 43px;
  margin-top: 3px;
  align-items: center;
  margin-right: 20px;
  border-radius: 30%;
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
