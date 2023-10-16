<template>
  <div class="container">
    <Header />
    <Main />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import Main from '@/components/Main/Main.vue'
</script>

<style scoped lang="scss">
.container {
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 50px;
}
</style>
