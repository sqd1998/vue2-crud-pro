<template>
  <el-form ref="form"
           :model="form"
           :inline="inline"
           >
    <el-form-item v-for="item in formLabel"
                  :key="item.label"
                  :label="item.label" >
      <el-input v-if="item.type === 'input'"
                :placeholder="'请输入' + item.label"
                v-model="form[item.model]" ></el-input>
      <el-switch v-if="item.type === 'switch'"
                 v-model="form[item.model]" class="form-switch"></el-switch>
      <el-date-picker v-if="item.type === 'date'"
                      type="date"
                      value-format="yyyy-MM-dd"
                      placeholder="选择日期"
                      v-model="form[item.model]" class="form-date"></el-date-picker>
      <el-select v-if="item.type === 'select'"
                 placeholder="请选择"
                 v-model="form[item.model]" class="form-select">
        <el-option v-for="item in item.opts"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'commonForm',
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
.el-form-item {
  margin-bottom: 0px;
  margin-top: 15px;

}

.el-form-item[data-v-21d2cbdf] {
  margin-top: 0px;

}
</style>
