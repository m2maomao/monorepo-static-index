<template>
  <div class="home">
    <h1>Welcome to Vue Monorepo</h1>
    <p>This is the home page</p>
    
    <div class="time-demo">
      <p>Current Date: {{ formattedDate }}</p>
      <p>Price: {{ formattedPrice }}</p>
    </div>
    
    <div class="button-demo">
      <UiButton type="primary" size="small">Small Primary</UiButton>
      <UiButton type="secondary">Default Secondary</UiButton>
      <UiButton type="danger" size="large">Large Danger</UiButton>
      <UiButton disabled>Disabled Button</UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDate, formatCurrency } from '@vue-monorepo/utils'

const currentDate = new Date()
const formattedDate = formatDate(currentDate)
const formattedPrice = formatCurrency(99.99)
</script>

<style scoped lang="scss">
.home {
  padding: 20px;
  text-align: center;
}

.time-demo {
  margin: 20px 0;
  p {
    margin: 10px 0;
  }
}

.button-demo {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>
