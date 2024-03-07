<template>
  <el-dialog v-model="userStore.visible" title="用户登录注册" width="500"
    >123
  </el-dialog>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user/index";
let userStore = useUserStore();
</script>

<style scoped></style>
