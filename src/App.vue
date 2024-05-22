<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
    <Login v-show="false"></Login>
  </div>
</template>

<script setup lang="ts">
import Header from "@/layout/header/index.vue";
import Footer from "@/layout/footer/index.vue";
import Login from "@/layout/login/index.vue";
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 730px;
  }
}
</style>
