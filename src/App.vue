<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "@/Layout/Header/index.vue";
import Footer from "@/Layout/Footer/index.vue";
// import request from '@/utils/request'

// import { onMounted } from "vue";
// onMounted(
//   () => {
//     request.get('/hosp/hospital/1/10').then((res) => { console.log(res) })

//   }
// )
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 800px;
  }
}
</style>
