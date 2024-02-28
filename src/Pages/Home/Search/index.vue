<template>
  <div class="container">
    <el-autocomplete
      clearable
      :trigger-on-focus="false"
      placeholder="Please Input"
      v-model="hosname"
      :fetch-suggestions="getData"
      @select="handleSelect"
    />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import { getHospitalListByName } from "@/api/home";
import type { SearchInfo } from "@/api/home/type";
import { useRouter } from "vue-router";
let hosname = ref<string>("");
let $router = useRouter();
const getData = async (queryString: string, cb: any) => {
  const res: SearchInfo = await getHospitalListByName(queryString);
  let data = res.data.map((item) => {
    // console.log(item);
    return {
      value: item.hosname,
      hoscode: item.hoscode,
    };
  });
  cb(data);
};
const handleSelect = () => {
  $router.push({
    path: "/hospital/",
  });
};
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
