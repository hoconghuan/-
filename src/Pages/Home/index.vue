<template>
  <div>
    <Carousel></Carousel>
    <Search></Search>
    <el-row :gutter="20">
      <el-col :span="20">
        <Level @getLevel="getLevel"></Level>
        <Region @getRegion="getRegion"></Region>
        <div class="detail" v-if="hospitalList.length > 0">
          <Card
            class="card"
            v-for="item in hospitalList"
            :key="item.id"
            :hospitalInfo="item"
          ></Card>
        </div>
        <el-empty v-else description="暂无数据" />
        <div class="pagnation">
          <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            layout=" prev, pager, next, jumper, sizes,total"
            :total="totalHisptal"
            @change="changePage"
          />
        </div>
      </el-col>
      <el-col :span="4"> <Info></Info></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "@/Pages/Home/Carousel/index.vue";
import Search from "@/Pages/Home/Search/index.vue";
import Level from "@/Pages/Home/Level/index.vue";
import Region from "@/Pages/Home/Region/index.vue";
import Card from "@/Pages/Home/Card/index.vue";
import Info from "@/pages/Home/Info/index.vue";
import type { HospitalResponseData, HospitalList } from "@/api/home/type";
import { onMounted, ref } from "vue";
import { getHospitalList } from "@/api/home";
let currentPage = ref<number>(1);
let pageSize = ref<number>(10);
onMounted(() => {
  getHaspitalInfo();
});
// 获取请求
const getHaspitalInfo = async () => {
  let result: HospitalResponseData = await getHospitalList(
    currentPage.value,
    pageSize.value,
    hostype.value,
    districtCode.value
  );
  // console.log(result.data);
  if (result.code === 200) {
    hospitalList.value = result.data.content;
    totalHisptal.value = result.data.totalElements;
  }
};

let hospitalList = ref<HospitalList>([]);
let totalHisptal = ref(0);
let hostype = ref<string>("");
let districtCode = ref<string>("");

// 分页效果
const changePage = () => {
  getHaspitalInfo();
};
const getLevel = (level: string) => {
  hostype.value = level;
  getHaspitalInfo();
};
const getRegion = (region: string) => {
  districtCode.value = region;
  getHaspitalInfo();
};
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
