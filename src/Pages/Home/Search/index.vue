<template>
    <div class="container">
        <el-autocomplete clearable placeholder="Please Input" />
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.container {
    width: 1200px;
    margin-top: 25px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    ::v-deep(.el-input__wrapper) {
        width: 600px;
        margin-right: 10px;
    }
}
</style>