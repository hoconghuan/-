<template>
    <div>
        <Carousel></Carousel>
        <Search></Search>
        <el-row>
            <el-col :span="20">
                <Level></Level>
                <Region></Region>
                <div class="detail">
                    <Card class="card" v-for="item in 10"></Card>
                </div>
                <div class="pagnation">
                    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 30, 40]" layout=" prev, pager, next, jumper, sizes,total" :total="40" />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import Carousel from '@/Pages/Home/Carousel/index.vue';
import Search from '@/Pages/Home/Search/index.vue';
import Level from '@/Pages/Home/Level/index.vue';
import Region from '@/Pages/Home/Region/index.vue';
import Card from '@/Pages/Home/Card/index.vue';
import { ref } from 'vue';
let currentPage = ref<number>(1);
let pageSize = ref<number>(10);

</script>

<style lang="scss" scoped>
.detail {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
        width: 48%;
        margin: 10px 0;

    }
}

.pagnation {
    display: flex;
    justify-content: center;
}
</style>