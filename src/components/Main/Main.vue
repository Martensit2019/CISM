<template>
    <main class="main">
        <Aside />
        <Content />
    </main>
</template>

<script setup lang="ts">
import Aside from '@/components/Aside/Aside.vue'
import Content from '@/components/Content/Content.vue'
</script>

<style scoped lang="scss">
@import 'main.scss'
</style>