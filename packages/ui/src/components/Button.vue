<template>
  <button :class="['ui-button', type]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'primary' | 'secondary' | 'danger'
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<style lang="scss" scoped>
.ui-button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  
  &.primary {
    background-color: var(--primary-color);
    color: white;
  }
  
  &.secondary {
    background-color: var(--secondary-color);
    color: white;
  }
  
  &.danger {
    background-color: #dc3545;
    color: white;
  }
}
</style>
