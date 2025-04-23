<template>
  <div class="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// App level setup
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  padding: 20px;
}

nav {
  padding: 20px 0;
  text-align: center;
  
  a {
    margin: 0 10px;
    color: #2c3e50;
    text-decoration: none;
    
    &.router-link-active {
      color: #42b983;
    }
  }
}
</style>
