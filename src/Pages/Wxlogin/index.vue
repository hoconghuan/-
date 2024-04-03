<template>
  <div></div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

import { setToken } from "@/utils/user";
let $route = useRoute();
setToken(JSON.stringify($route.query));

</script>

<style scoped></style>
