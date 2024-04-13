<template>
  <div class="box">
    <h1>关于利姆鲁</h1>
    <!-- <el-button type="primary" size="default">红丸</el-button>
    <div>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
      <h1>123</h1>
    </div> -->
    <!-- <el-icon size="20" color="#666">
      <Edit />
    </el-icon> -->
    <!-- <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      :disabled="disabled"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    /> -->
    <!-- <Test></Test> -->
    <!-- <SvgIcon name="shop"></SvgIcon> -->
    <!-- <svg-icon name="shop"></svg-icon> -->
    <!-- <svg-icon></svg-icon> -->
    <h3>测试axios二次封装</h3>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request.ts'
import { onMounted } from 'vue'
// import {
//   Check,
//   Delete,
//   Edit,
//   Message,
//   Search,
//   Star,
// } from '@element-plus/icons-vue'
// import Test from '@/components/Test.vue'
// import SvgIcon from '@/components/Svg.vue'

// 年月日 yyyy-mm-dd
var regex = /^[0-9]{4}-(0[1-9]|1[1-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
console.log(regex.test('2002-11-31'))

// const disabled = ref(false)
// 当组件挂载完毕之后发送一个请求
onMounted(() => {
  request({
    url: 'user/login',
    method: 'post',
    data: {},
  }).then((res: any) => {
    console.log(res)
  })
})
</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 600px;
  h1 {
    color: red;
  }
}
</style>
