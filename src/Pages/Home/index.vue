<template>
    <div>
        <Carousel></Carousel>
        <Search></Search>
        <el-row>
            <el-col :span="20">
                <Level></Level>
                <Region></Region>
                <div class="detail">
                    <Card class="card" v-for="item in hospitalList" :key='item.id' :hospitalInfo='item'></Card>
                </div>
                <div class="pagnation">
                    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 30, 40]" layout=" prev, pager, next, jumper, sizes,total"
                        :total="totalHisptal" @change='changePage' />
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
import { onMounted, ref } from 'vue';
import { getHospitalList } from '@/api/home';
let currentPage = ref<number>(1);
let pageSize = ref<number>(10);
onMounted(() => {
    getHaspitalInfo()
})
const getHaspitalInfo
    = async () => {
        let result: any = await getHospitalList(currentPage.value, pageSize.value)
        // console.log(result.data);
        if (result.code === 200) {
            hospitalList.value = result.data.content
            totalHisptal.value = result.data.totalElements
        }
    }

let hospitalList = ref<object[]>([])
let totalHisptal = ref(0)
const changePage = () => {
    getHaspitalInfo()

}
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