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
        <el-form-item>
          <el-button type="primary"
                     @click="toLogin">立即登录</el-button>
          <el-button type="primary"
                     @click="toRegistration"
                     class="btn2" disabled>立即注册</el-button>
        </el-form-item>

      </el-form>

    </el-card>
  </div>
</template>

<script>
import Mock from 'mockjs'
import bus from '../../eventBus'
import { getUserPermissions } from '../../untils/data'
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请填写账户', trigger: 'blur' }],
        password: [{ required: true, message: '请填写密码', trigger: 'blur' }]
      },
      menu: []
    }
  },
  methods: {
    toLogin() {
      getUserPermissions(this.form)
        .then(({ data: res }) => {
          if (res.code === 20000) {
            const token = res.data.token
            this.$store.commit('setToken', token)
            this.menu = res.data.menu
            // console.log(this.menu)

            this.$router.push('/home')
          } else {
            // console.log(res);
            this.$message({
              message: '账户或者密码有误,请重试',
              type: 'error'
            })
          }
        })
        .then(() => {
          bus.$emit('shareMenu', this.menu)
          // console.log(this.menu)
        })
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
  background-color: #eeeeee;
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
</style>
