<template>
  <div class="manage">
    <el-dialog :title="operateType === 'add' ? '新增用户':'编辑用户'"
               :visible.sync="isShow">
      <commonForm :formLabel="opertateFormLabel"
                  :form="operateForm"
                  :inline="true"
                  ref="form"></commonForm>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="primary"
                   @click="confirm">确定</el-button>
        <el-button @click="Cancellation">取消</el-button>

      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary"
                 @click="addUser">+新增</el-button>
      <commonForm :formLabel="formLabel"
                  :form="searchFrom"
                  :inline="true"
                  ref="form">
        <el-button type="primary"
                   @click="getList(searchFrom.keyword)">搜索</el-button>
      </commonForm>
    </div>
    <div class="manage-body">
      <UserList :userList="userList"
                :config="config"
                @changePage="getList()"
                @edit="editUser"
                @del="delUser"></UserList>
    </div>
  </div>
</template>

<script>
import commonForm from '../../components/commonForm'
import UserList from '../../components/UserList'
import {
  getUser,
  addUserData,
  editUserData,
  delUserData
} from '../../untils/data'

export default {
  name: 'user',
  components: {
    commonForm,
    UserList
  },
  data() {
    return {
      operateType: 'add',
      isShow: false,
      opertateFormLabel: [
        {
          model: 'name',
          label: '姓名',
          type: 'input'
        },
        {
          model: 'age',
          label: '年龄',
          type: 'input'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址',
          type: 'input'
        }
      ],
      operateForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
          type: 'input'
        }
      ],
      searchFrom: {
        keyword: ''
      },
      userList: [],
      config: {
        page: 1,
        total: 10
      }
    }
  },
  methods: {
    async getList(name = '') {
      this.config.loading = true
      // this.config.page = name ? 1 : this.config.page
      name ? (this.config.page = 1) : ''

        const {data: res} = await getUser({
        page: this.config.page,
        name
      })
        // console.log(res);

        // console.log(this.searchFrom.keyword)
        //数据处理  把0变成女
        this.userList = res.list.map(item => {
          item.sexLabel = item.sex === 0 ? '女' : '男'
          return item
        })
        this.config.total = res.count
        this.config.loading = false
      
    },
    async confirm() {
      if (this.operateType === 'edit') {
        const {data: res} = await editUserData(this.operateForm)
          this.isShow = false
          this.getList()
        
      } else {
        const {data: res} = await addUserData(this.operateForm)
          this.isShow = false
          this.getList()
          // console.log(res);
        
      }
    },
    Cancellation() {
      this.isShow = false
      this.operateForm = { name: '', addr: '', age: '', birth: '', sex: '' }
      // this.getList()
    },

    addUser() {
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = { name: '', addr: '', age: '', birth: '', sex: '' }
    },

    editUser(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = { ...row }
      // this.getList()
    },
    async delUser(id) {
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      })

        const {data: res} = await delUserData({ id })
          if (res.code === 20000) {
            this.getList()
            this.$message({
              type: 'success',
              message: '删除成功'
            }) 
          }             
    }
  },
  created() {
    this.getList()
  },
  // update() {
  //   this.getList()
  // }
}
</script>

<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
