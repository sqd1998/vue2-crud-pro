<template>
  <el-menu default-active="/"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
           :collapse="isCollapse"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b">
    <img src="../assets/0.png"
         class="aside-title"
         id="aside-img"
         v-if="isCollapse">
    <h3 class="aside-title"
        v-else>后台管理系统</h3>

    <el-menu-item @click="toView(item)"
                  v-for="item in noChildren"
                  :index="item.path"
                  :key="item.path">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>

    <el-submenu index="item.index"
                v-for="item in hasChildren"
                :key="item.path">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="item in item.children"
                          :key="item.path">

        <el-menu-item :index="item.path"
                      @click="toView(item)">
                       <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
                      </el-menu-item>
      </el-menu-item-group>

    </el-submenu>

  </el-menu>
</template>

<script>

import bus from '../eventBus'


export default {
  name: 'Aside',
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    },
    toView(item) {
      this.$router.push({
        name: item.name
      })
      // this.$store.commit('updatePath', item)
    },
    
        
  

    
  },
  computed: {
    noChildren() {
      return this.menu.filter(item => !item.children)
    },
    hasChildren() {
      return this.menu.filter(item => item.children)
    }
  },
  data() {
    return {
      isCollapse: false,
      menu: []
     
    }
  },
  created() {
    bus.$on('shareMenu', val => {
      this.menu = val
    })
    bus.$on('share', val => {
      this.isCollapse = val
    })
    this.menu = JSON.parse(this.$route.query.menu)
  },
  mounted () {
       window.addEventListener("load", () => {
      
      // console.log('刷新事件');
      // console.log(this.menu);      
    });
    
  }
    

  
 
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-width: 200px;
  // min-height: 900px;
}
.el-menu {
  height: 100%;
  border: none;
  min-height: 115vh;
  .aside-title {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
  #aside-img {
    border-radius: 50%;
    width: 59px;
  }
}
</style>
