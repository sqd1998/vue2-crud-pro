<template>
  <div class="main">
    <el-card class="box-card"
             shadow="hover">
      <div slot="header"
           class="header">后台系统登录</div>
      <el-form ref="form"
               :model="form"
               label-width="90px"
               :rules="rules">
        <el-form-item label="用户名"
                      prop="username">
          <el-input v-model="form.username"
                    type="text" placeholder="admin"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input v-model="form.password"
                    type="password" placeholder="admin"></el-input>
        </el-form-item>
        <keep-alive>
        <el-form-item>
          <el-button type="primary"
                     @click="toLogin('ruleForm')">立即登录</el-button>
          <el-button type="primary"
                     @click="toRegistration"
                     class="btn2" disabled>立即注册</el-button>
        </el-form-item>
        </keep-alive>

      </el-form>

    </el-card>
    <Evanyou class="bgc"></Evanyou>
  </div>
</template>

<script>
import Mock from 'mockjs'
// import bus from '../../eventBus'
import { getUserPermissions } from '../../utils/data'
import Evanyou from "../../components/Evanyou"

export default {
  name: 'login',
  components: {
    Evanyou
  },
  data() {
    return {
      form: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        username: [{ required: true, message: '请填写账户', trigger: 'blur' }],
        password: [{ required: true, message: '请填写密码', trigger: 'blur' }]
      },
      menu: [],
      ruleForm: {
        username: '',
        password: ''
          
        }
    }
  },
  methods: {
    async toLogin() {
    const {data: res} =  await getUserPermissions(this.form)
    // console.log(res);
    
        
          if (res.code === 20000) {
            const token = res.data.token
            this.$store.commit('setToken', token)
            this.menu = res.data.menu
            this.$router.push({
              path: '/home',
              query: {
                menu: JSON.stringify(this.menu)
              }
            })
          } else {
            this.$message({
              message: '账户或者密码有误,请重试',
              type: 'error'
            })
          }
          
        
        
        
    },
    toRegistration() {}
  },
  update() {
    // this.sendMenu()
  }
}
</script>

<style lang="less" scoped>
.box-card {
  width: 500px;
  height: 300px;
  border-radius: 5%;

  .header {
    text-align: center;
    font-size: 24px;
  }
}
.main {
  height: 750px;
  // background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-input {
  width: 77%;
}
.el-form {
  margin-top: 10px;
}
.btn2 {
  margin-left: 66px;
}
.bgc {
  z-index: -1 !important;

}
</style>
