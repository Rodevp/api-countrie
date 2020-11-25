<template>
  <div>
    <Header class="header" />
    <router-view></router-view>
  </div>
</template>

<script>

import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>
  .header {
    background-color:#f5f5f5;
    border: 1px solid #bbbbbb;
    height: 50px;
    text-align: center;
    font-size: 35px;
    font-weight: 500;
  }
</style>

