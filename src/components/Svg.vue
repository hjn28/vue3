<template>
  <div>
    <h1>svg图标使用</h1>
    <!-- svg图标使用 -->
    <svg>
      <use xlink:href="#icon-home" fill="red"></use>
      <!-- <use :xlink:href="prefix + name" fill="red"></use> -->
    </svg>
  </div>
</template>

<script setup lang='ts'>
// defineProps({
//   prefix: {
//     type: String,
//     default: '#icon-'
//   },
//   name: {
//     type: String,
//     default: 'home'
//   }
// })
</script>

<style scoped>

</style>
