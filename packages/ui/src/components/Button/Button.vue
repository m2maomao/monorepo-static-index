<template>
  <button
    class="ui-button"
    :class="[
      `ui-button--${type}`,
      `ui-button--${size}`,
      { 'ui-button--disabled': disabled }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium',
  disabled: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style lang="scss">
.ui-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &--primary {
    background-color: #1677ff;
    color: white;
    &:hover {
      background-color: #4096ff;
    }
  }

  &--secondary {
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.88);
    &:hover {
      border-color: #4096ff;
      color: #4096ff;
    }
  }

  &--danger {
    background-color: #ff4d4f;
    color: white;
    &:hover {
      background-color: #ff7875;
    }
  }

  &--small {
    padding: 4px 15px;
    font-size: 14px;
  }

  &--medium {
    padding: 6px 20px;
    font-size: 16px;
  }

  &--large {
    padding: 8px 25px;
    font-size: 18px;
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>