<template>
  <div></div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

import { setToken } from "@/utils/user";
let $route = useRoute();
console.log($route.query);
setToken(JSON.stringify($route.query));
</script>

<style scoped></style>
