<template>
  <button :class="['btn', `btn_${props.color}`, { 'btn_rounded': props.rounded }]" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface IProps {
  label: string
  color?: string
  rounded?: boolean
  disabled?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  color: 'primary',
  rounded: false,
  disabled: false
})
</script>

<style scoped lang="scss">
@import 'button'
</style>