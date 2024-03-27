<template>
  <div class="box">
    <h1>关于利姆鲁</h1>
    <el-button type="primary" size="default">红丸</el-button>
    <div>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </div>
    <!-- <el-icon size="20" color="#666">
      <Edit />
    </el-icon> -->
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      :disabled="disabled"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
    <Test></Test>
  </div>
</template>

<script setup lang="ts">
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import Test from '@/components/test.vue'

const disabled = ref(false)
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
