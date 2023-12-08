<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <!-- <Content></Content> -->
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
// import Content from '@/Layout/Content/index.vue';
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;


  .content {
    margin-top: 70px;
    width: 1200px;
    height: 1200PX;
  }
}
</style>