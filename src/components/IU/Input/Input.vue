<template>
  <input :id="id" ref="input" class="input" :type="type" :placeholder="placeholder" :value="modelValue"
    @input="onInput" />
</template>
  
<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      default: () => '',
    },
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: String,
      default: () => '',
    },
    placeholder: {
      type: String,
      default: () => '',
    },
  },
  emits: ['update:modelValue'],
  data: function () {
    return {
      showPassword: false,
    }
  },
  methods: {
    onInput(event: Event) {
      this.$emit(
        'update:modelValue',
        (event.target as HTMLInputElement).value
      )
    }
  }
}
</script>

  
<style scoped>
@import 'input.scss'
</style>