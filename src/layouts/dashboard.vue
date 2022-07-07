<template>
  <div id="app" class="vue-layout-default">
    <h1>Dashboard</h1>
    <router-link :to="{ name: 'Products' }">Products</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
};
</script>

<style lang="scss">
</style>
