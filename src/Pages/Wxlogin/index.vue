<template>
  <div></div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
// import { useUserStore } from "@/store/user";
let $route = useRoute();
console.log(123);

console.log($route.query);
</script>

<style scoped></style>
