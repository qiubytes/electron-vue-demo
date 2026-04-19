<template>
  <div>关于页面</div>
  <a-button type="primary" @click="handleClick">
    Ant Design Vue 按钮
  </a-button>
</template>
<script setup lang="ts">
const handleClick = () => {
  console.log('clicked');
}
</script>