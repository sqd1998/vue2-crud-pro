<template>
  <div>
    <el-table :data="userList"
              style="width: 100%"
              max-height="580">
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
                       
      </el-table-column>
      <el-table-column prop="sexLabel"
                       label="性别"
                       width="180">
      </el-table-column>
      <el-table-column prop="age"
                       label="年龄"
                       width="180">
      </el-table-column>
      <el-table-column prop="birth"
                       label="出生日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="addr"
                       label="地址"
                       width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.row,scope.$index)">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-pagination background
                   layout="prev, pager, next"
                   :total="config.total" class="pager" :current-page.sync="config.page" @current-change="changePage" :page-size="20">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    userList: [],
    config:{
        page: 1,
        total: 25
    }
  },
  methods: {
    handleEdit(row){
      this.$emit('edit',row)
      // console.log(row);
      
    },
    handleDelete(row){
      this.$emit('del',row.id)
      // console.log(row.id);
      
    },
    changePage(page){
      this.$emit('changePage',page)
      // console.log(page);
      
      

    }
  }
}
</script>

<style lang="less" scoped>
.pager {
  float: right;
  
}
</style>
